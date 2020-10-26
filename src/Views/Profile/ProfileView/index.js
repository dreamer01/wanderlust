import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Text, TextInput} from 'react-native';
import {NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import Routes from '../../../Navigations/Routes';
import I18n from '../../../localization/i18n';
import {useUser} from '../../../Utils/userContext';
import {Places} from '../../../Constants/Constants';
import AppButton from '../../../Components/base-componets/AppButton';
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import PlaceCollectionView from '../../../Components/PlaceCollectionView';

import styles from './styles';

const ProfileView = ({navigation}) => {
  const [user, userDispatch] = useUser();

  const logoutButtonAction = () => {
    // TODO: Uncomment currently commented to avoid popups
    // auth0.webAuth.clearSession({}).catch(error => console.log(error));
    AsyncStorage.clear()
      .then(() =>
        navigation.dispatch(
          NavigationActions.navigate({routeName: Routes.WelcomeView}),
        ),
      )
      .catch(error => console.log(error));
  };

  const renderMiddleView = () => {
    return (
      <View style={styles.middleView}>
        {renderProfileInfoView()}
        {renderVisitedPlaces()}
        {renderVisitedPlaces()}
        {renderLogoutButton()}
      </View>
    );
  };

  const renderProfileInfoView = () => {
    return (
      <View style={styles.profileView}>
        <View style={styles.imageContainer}>
          <Image
            source={{uri: user && user.picture}}
            resizeMode={'cover'}
            resizeMethod={'resize'}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.titleDetailsView}>
          <Text style={styles.titleText}>{user && user.name}</Text>
          <Text style={styles.subtitleText}>{user && user.email}</Text>
        </View>
      </View>
    );
  };

  // const renderNameInput = () => {
  //   return (
  //     <TextInput
  //       underlineColorAndroid={'transparent'}
  //       placeholder={I18n.t('signUp02')}
  //       autoCapitalize={'sentences'}
  //       returnKeyType={'next'}
  //       autoCorrect={false}
  //       style={styles.inputViewStyle}
  //       onChangeText={text => {}}
  //       value={user && user.name}
  //     />
  //   );
  // };

  // const renderEmailAddress = () => {
  //   return (
  //     <TextInput
  //       underlineColorAndroid={'transparent'}
  //       placeholder={I18n.t('signIn02')}
  //       keyboardType={'email-address'}
  //       autoCapitalize={'none'}
  //       returnKeyType={'next'}
  //       autoCorrect={false}
  //       style={styles.inputViewStyle}
  //       onChangeText={text => {}}
  //       value={user && user.email}
  //     />
  //   );
  // };

  const renderVisitedPlaces = () => {
    return (
      <PlaceCollectionView
        navigation={navigation}
        data={Places}
        headerTitle={I18n.t('profile02')}
      />
    );
  };

  const renderLogoutButton = () => {
    return (
      <AppButton
        title={I18n.t('profile03')}
        onTouch={logoutButtonAction}
        styles={styles.logoutButtonStyle}
        textStyles={styles.logoutButtonTextStyle}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TitleNavigationHeader
        navigation={navigation}
        title={I18n.t('profile01')}
        showRightButton
      />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        {renderMiddleView()}
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};
export default ProfileView;
