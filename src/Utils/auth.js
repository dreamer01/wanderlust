import AsyncStorage from '@react-native-community/async-storage';

import auth0 from '../Config/auth0';

export const refreshAccessToken = async () => {
  const refreshToken = await AsyncStorage.getItem('travelapp:refreshToken');
  return auth0.auth
    .refreshToken({refreshToken})
    .then(credentials => {
      AsyncStorage.setItem('travelapp:accessToken', credentials.accessToken);
      console.log('Generated new token.');
      return credentials.accessToken;
    })
    .catch(err => {
      console.log(err);
    });
};

export const login = callback => {
  auth0.webAuth
    .authorize({
      scope: 'openid profile email offline_access',
      audience: 'dgraph-wanderlust',
      prompt: 'login',
    })
    .then(credentials => {
      console.log(credentials);
      if (credentials) {
        AsyncStorage.setItem('travelapp:accessToken', credentials.accessToken);
        AsyncStorage.setItem(
          'travelapp:refreshToken',
          credentials.refreshToken,
        );
      }
      if (callback) {
        callback(credentials);
      }
    })
    .catch(error => console.log(error));
};
