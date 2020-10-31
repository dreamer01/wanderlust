import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
import AppButton from '../../../Components/base-componets/AppButton';

import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import {Icons} from '../../../Constants/Assets';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';

import I18n from '../../../localization/i18n';
import Routes from '../../../Navigations/Routes';

import styles from './styles';

const PlaceDetailsView = ({navigation}) => {
  const info = navigation.state.params.info;

  const signInButtonAction = () => {
    navigation.navigate(Routes.BookHotelView)
  }

  return (
    <SafeAreaView style={styles.container}>
      <BaseNavigationHeader
        navigation={navigation}
        title={I18n.t('hotelDetails01')}
      />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        <Image
          source={{uri: info.cover}}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.imageDetails}
        />
        <Text style={styles.nameTitle}>{info.name}</Text>
        <View style={styles.nameLocation}>
          <Image source={Icons.location} style={styles.location} />
         
        </View>
        <Text style={styles.des}>{info.description}</Text>
        <AppButton
        title={'Favourite'}
        onTouch={signInButtonAction}
        styles={styles.signInButtonStyle}
        textStyles={styles.signInButtonTextStyle}
      />
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetailsView;
