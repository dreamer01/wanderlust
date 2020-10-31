import React from 'react';
import {SafeAreaView, Image, Text, View} from 'react-native';
import AppButton from '../../../Components/base-componets/AppButton';

import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import {Icons} from '../../../Constants/Assets';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';

import I18n from '../../../localization/i18n';
import Routes from '../../../Navigations/Routes';

import styles from './styles';

const HotelDetailsView = ({navigation}) => {
  const info = navigation.state.params.info;

  const bookHotel = () => {
    navigation.navigate(Routes.BookHotelView, {hotel: info});
  };

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
          <Text style={styles.city}>{info.location.name}</Text>
        </View>
        <Text style={styles.des}>{info.description}</Text>
        <AppButton
          title={I18n.t('hotelDetails02')}
          onTouch={bookHotel}
          styles={styles.signInButtonStyle}
          textStyles={styles.signInButtonTextStyle}
        />
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};

export default HotelDetailsView;
