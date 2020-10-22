import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Config from 'react-native-config';

import auth0 from '../../../Config/auth0';
import {Images} from '../../../Constants/Assets';
import I18n from '../../../localization/i18n';
import Routes from '../../../Navigations/Routes';
import AppButton from '../../../Components/base-componets/AppButton';

import styles from './styles';

class WelcomeView extends Component {
  static navigationOptions = {
    header: null,
  };

  signInButtonAction = this.signInButtonAction.bind(this);

  // TODO: Add user to context
  signInButtonAction() {
    auth0.webAuth
      .authorize(
        {scope: 'openid profile email', audience: 'dgraph-wanderlust'},
        {ephemeralSession: true},
      )
      .then(credentials => {
        console.log(credentials);
        AsyncStorage.setItem('travelapp:user', JSON.stringify(credentials));
        // setShowLogin(false);
        // console.log(credentials.idToken);
        // userDispatch({
        //   type: 'UPDATE_USER',
        //   user: {
        //     ...credentials,
        //   },
        // });
        this.props.navigation.navigate(Routes.TabNavigator);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={Images.splash} style={styles.imageView}>
          <View style={styles.topView}>
            <Text style={styles.headingStyles}>{I18n.t('welcome01')}</Text>
            <Text style={styles.detailStyles}>{I18n.t('welcome02')}</Text>
          </View>
          <View style={styles.bottomView}>
            <AppButton
              title={I18n.t('welcome03')}
              onTouch={this.signInButtonAction}
              styles={styles.signInButtonStyle}
            />
            <AppButton
              title={I18n.t('welcome04')}
              onTouch={this.signInButtonAction}
              styles={styles.signUpButtonStyle}
              textStyles={styles.signUpButtonTextStyle}
            />
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default WelcomeView;
