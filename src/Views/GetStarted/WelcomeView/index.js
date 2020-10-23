import React, {Component, useState, useEffect, useCallback} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import auth0 from '../../../Config/auth0';
import {useUserDispatch} from '../../../Utils/userContext';
import {login} from '../../../Utils/auth';
import {Images} from '../../../Constants/Assets';
import I18n from '../../../localization/i18n';
import Routes from '../../../Navigations/Routes';
import AppButton from '../../../Components/base-componets/AppButton';

import styles from './styles';

const WelcomeView = ({navigation}) => {
  const userDispatch = useUserDispatch();
  const [showLogin, setShowLogin] = useState(false);

  // To clear tokens in debugging mode
  // useEffect(() => {
  //   AsyncStorage.clear();
  // }, []);

  useEffect(() => {
    async function getUser() {
      const accessToken = await AsyncStorage.getItem('travelapp:accessToken');
      if (accessToken) {
        auth0.auth
          .userInfo({token: accessToken})
          .then(user => {
            userDispatch({
              type: 'UPDATE_USER',
              user,
            });
            navigation.navigate(Routes.TabNavigator);
          })
          .catch(err => {
            console.log('User Login Failed :: ', err);
            refreshAccessToken();
          });
      } else {
        setShowLogin(true);
      }
    }
    getUser();
  }, [refreshAccessToken, navigation, userDispatch]);

  const refreshAccessToken = useCallback(async () => {
    const refreshToken = await AsyncStorage.getItem('travelapp:refreshToken');
    auth0.auth
      .refreshToken({refreshToken})
      .then(credentials => {
        AsyncStorage.setItem('travelapp:accessToken', credentials.accessToken);
        auth0.auth
          .userInfo({token: credentials.accessToken})
          .then(user => {
            userDispatch({
              type: 'UPDATE_USER',
              user,
            });
            navigation.navigate(Routes.TabNavigator);
          })
          .catch(err => {
            console.log('User Login Failed :: ', err);
          });
      })
      .catch(err => {
        console.log(err);
        login(updateUser);
      });
  }, [navigation, updateUser, userDispatch]);

  const updateUser = useCallback(
    credentials => {
      auth0.auth
        .userInfo({token: credentials.accessToken})
        .then(user => {
          userDispatch({
            type: 'UPDATE_USER',
            user,
          });
          navigation.navigate(Routes.TabNavigator);
        })
        .catch(err => {
          console.log('User Login Failed :: ', err);
        });
    },
    [navigation, userDispatch],
  );

  return (
    <View style={styles.container}>
      <ImageBackground source={Images.splash} style={styles.imageView}>
        <View style={styles.topView}>
          <Text style={styles.headingStyles}>{I18n.t('welcome01')}</Text>
          <Text style={styles.detailStyles}>{I18n.t('welcome02')}</Text>
        </View>
        {showLogin && (
          <View style={styles.bottomView}>
            <AppButton
              title={I18n.t('welcome03')}
              onTouch={() => login(updateUser)}
              styles={styles.signInButtonStyle}
            />
            <AppButton
              title={I18n.t('welcome04')}
              onTouch={() => login(updateUser)}
              styles={styles.signUpButtonStyle}
              textStyles={styles.signUpButtonTextStyle}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default WelcomeView;
