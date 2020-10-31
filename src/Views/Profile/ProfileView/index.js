import React, {Component, useEffect, useState} from 'react';
import {SafeAreaView, View, Image, Text, TextInput} from 'react-native';
import {NavigationActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';
import {useQuery} from '@apollo/client';
import ContentLoader, {Rect} from 'react-content-loader/native';

import Routes from '../../../Navigations/Routes';
import I18n from '../../../localization/i18n';
import {useUser} from '../../../Utils/userContext';
import {Places} from '../../../Constants/Constants';
import {FETCH_PROFILE_DETAILS} from '../../../Utils/queries';
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

  const {data: profileData, loading} = useQuery(FETCH_PROFILE_DETAILS, {
    variables: {email: user && user.email},
  });

  const renderMiddleView = () => {
    return (
      <View style={styles.middleView}>
        {renderProfileInfoView()}
        <View style={styles.carousel}>
          {loading ? (
            <View style={styles.cityLoader}>
              <ContentLoader viewBox="0 0 380 80">
                <Rect x="5%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="30%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="55%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="80%" y="5%" rx="4" ry="4" width="20%" height="90%" />
              </ContentLoader>
            </View>
          ) : (
            renderVisitedPlaces()
          )}
          {loading ? (
            <View style={styles.cityLoader}>
              <ContentLoader viewBox="0 0 380 80">
                <Rect x="5%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="30%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="55%" y="5%" rx="4" ry="4" width="20%" height="90%" />
                <Rect x="80%" y="5%" rx="4" ry="4" width="20%" height="90%" />
              </ContentLoader>
            </View>
          ) : (
            renderUserBookings()
          )}
        </View>
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
        data={loading ? [] : profileData.getUser.visited}
        headerTitle={I18n.t('profile02')}
      />
    );
  };

  const renderUserBookings = () => {
    return (
      <PlaceCollectionView
        navigation={navigation}
        data={
          loading
            ? []
            : profileData.getUser.bookings.reduce(
                (bookings, b) => [...bookings, b.hotel],
                [],
              )
        }
        headerTitle={I18n.t('profile04')}
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
