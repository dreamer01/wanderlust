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
          Authorization: token,
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
      const {message} = graphQLErrors[0];
      console.log('GraphQL Error ', message);
    }

    if (networkError) {
      const {message} = networkError[0];
      console.log('Network Error ', message);
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
            Authorization: token ? token : '',
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
