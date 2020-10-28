import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  split,
  Observable,
} from '@apollo/client';
import {WebSocketLink} from '@apollo/client/link/ws';
import {onError} from '@apollo/client/link/error';
import {setContext} from '@apollo/client/link/context';
import {getMainDefinition} from '@apollo/client/utilities';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import {refreshAccessToken} from '../Utils/auth';

// AuthLink to add auth headers & logic to Http link
const authLink = setContext((_, {headers}) => {
  return AsyncStorage.getItem('travelapp:accessToken').then(token => {
    if (token) {
      return {
        headers: {
          ...headers,
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      return {...headers};
    }
  });
});

// ErrorLink to handle error on every ops.
const errorLink = onError(
  ({graphQLErrors, networkError, operation, forward}) => {
    if (graphQLErrors) {
      const {extensions, message} = graphQLErrors[0];
      switch (extensions.code) {
        case 'data-exception':
          console.log('Data Exception : ', message);
          break;
        case 'validation-failed':
          console.log('Validation Failed : ', message);
          break;
        case 'invalid-jwt':
          console.log('Invalid JWT : ', message);
          return new Observable(observer => {
            refreshAccessToken()
              .then(accessToken => {
                operation.setContext(({headers}) => ({
                  headers: {
                    ...headers,
                    Authorization: `Bearer ${accessToken}`,
                  },
                }));
              })
              .then(() => {
                const subscriber = {
                  next: observer.next.bind(observer),
                  error: observer.error.bind(observer),
                  complete: observer.complete.bind(observer),
                };

                // Retry last failed request
                forward(operation).subscribe(subscriber);
              })
              .catch(error => {
                // No refresh or client token available, we force user to login
                observer.error(error);
              });
          });
        default:
          console.log(extensions.code, message);
      }
    }

    if (networkError) {
      try {
        switch (networkError.extensions.code) {
          case 'start-failed':
            console.log('Start Failed : ', networkError.message);
            return new Observable(observer => {
              refreshAccessToken()
                .then(accessToken => {
                  operation.setContext(({headers}) => ({
                    headers: {
                      ...headers,
                      Authorization: `Bearer ${accessToken}`,
                    },
                  }));
                })
                .then(() => {
                  const subscriber = {
                    next: observer.next.bind(observer),
                    error: observer.error.bind(observer),
                    complete: observer.complete.bind(observer),
                  };

                  // Retry last failed request
                  forward(operation).subscribe(subscriber);
                })
                .catch(error => {
                  // No refresh or client token available, we force user to login
                  observer.error(error);
                });
            });
          case 'validation-failed':
            console.log('Validation Failed : ', networkError.message);
            break;
          default:
            console.log(networkError.extensions.code);
        }
      } catch (error) {
        console.log(error);
      }
    }
  },
);

const makeApolloClient = () => {
  const httpLink = new HttpLink({uri: Config.DGRAPH_HTTP_ENDPOINT});

  const options = {
    lazy: true,
    reconnect: true,
    connectionParams: async () => {
      const token = await AsyncStorage.getItem('travelapp:accessToken');
      if (token) {
        return {
          headers: {
            Authorization: token ? `Bearer ${token}` : '',
          },
        };
      } else {
        return {};
      }
    },
  };

  // create an apollo websocket link instance, a network interface for apollo client
  const wsLink = new WebSocketLink({
    uri: Config.DGRAPH_SUBSCRIPTION_ENDPOINT,
    options: {reconnect: true},
  });

  // create an inmemory cache instance for caching graphql data
  const cache = new InMemoryCache();

  // Creating the apollo link based on ops
  const link = split(
    ({query}) => {
      const {kind, operation} = getMainDefinition(query);
      return kind === 'OperationDefinition' && operation === 'subscription';
    },
    errorLink.concat(wsLink),
    errorLink.concat(authLink.concat(httpLink)),
  );

  // instantiate apollo client with apollo link instance and cache instance
  const client = new ApolloClient({
    link,
    cache,
  });
  return client;
};

export default makeApolloClient;
