import React, {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import {StatusBar, View} from 'react-native';
import {ApolloProvider} from '@apollo/client';

import {UserProvider} from '../../Utils/userContext';
import makeApolloClient from '../../Config/apollo';
import AppNavigation from '../../Navigations/AppNavigation';
import Loader from '../../Components/Loading/Loader';

import styles from './styles';

const App = () => {
  const [client, setClient] = useState(null);
  const [isOnline, setOnline] = useState(true);

  useEffect(() => {
    setClient(makeApolloClient());
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setOnline(state.isConnected);
    });
    return unsubscribe();
  });

  return (
    <View style={styles.container}>
      <StatusBar />
      {isOnline ? (
        <>
          {client ? (
            <ApolloProvider client={client}>
              <UserProvider>
                <AppNavigation />
              </UserProvider>
            </ApolloProvider>
          ) : (
            <Loader />
          )}
        </>
      ) : (
        <View>
          <Text>Offline</Text>
        </View>
      )}
    </View>
  );
};

export default App;
