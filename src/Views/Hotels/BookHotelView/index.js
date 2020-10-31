import React, {Component, useState} from 'react';
import {SafeAreaView, View, Keyboard, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';
import {useMutation} from '@apollo/client';
import shortid from 'shortid';

import I18n from '../../../localization/i18n';
import {useUser} from '../../../Utils/userContext';
import {ADD_BOOKING} from '../../../Utils/mutations';
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import AppButton from '../../../Components/base-componets/AppButton';

import styles from './styles';
import {AppFont} from '../../../Constants/Fonts';

const BookHotelView = ({navigation}) => {
  const [checkInDate, setCheckIn] = useState('');
  const [checkOutDate, setCheckOut] = useState('');
  const [members, setMembers] = useState(0);
  const hotel = navigation.state.params.hotel;
  const [user] = useUser();

  const [addBooking] = useMutation(ADD_BOOKING, {
    variables: {
      bookingId: shortid.generate(),
      checkIn: checkInDate,
      checkOut: checkOutDate,
      members,
      hotelId: hotel.id,
      userEmail: user.email,
    },
    onCompleted: () => navigation.goBack(),
  });

  const bookButtonAction = () => {
    Keyboard.dismiss();
    addBooking();
  };

  const renderMiddleView = () => {
    return (
      <View>
        {renderFromInputView()}
        {renderToInputView()}
        {renderPassengerInputView()}
        {renderBookButton()}
      </View>
    );
  };

  const renderFromInputView = () => {
    return (
      <View style={styles.dateView}>
        <DatePicker
          style={styles.dateInputView}
          date={checkInDate}
          mode="date"
          placeholder={I18n.t('hotels08')}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
            dateText: {
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left',
            },
            placeholderText: {
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left',
            },
          }}
          onDateChange={setCheckIn}
        />
      </View>
    );
  };

  const renderToInputView = () => {
    return (
      <View style={styles.dateView}>
        <DatePicker
          style={styles.dateInputView}
          date={checkOutDate}
          mode="date"
          placeholder={I18n.t('hotels09')}
          format="YYYY-MM-DD"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateInput: {
              borderWidth: 0,
            },
            dateText: {
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left',
            },
            placeholderText: {
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left',
            },
          }}
          onDateChange={setCheckOut}
        />
      </View>
    );
  };

  const renderPassengerInputView = () => {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        placeholder={I18n.t('hotels10')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => setMembers(text)}
        onSubmitEditing={bookButtonAction}
        value={members}
      />
    );
  };

  const renderBookButton = () => {
    return (
      <AppButton
        title={I18n.t('hotels06')}
        onTouch={bookButtonAction}
        styles={styles.bookButtonStyle}
        textStyles={styles.bookButtonTextStyle}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <BaseNavigationHeader
        navigation={navigation}
        title={I18n.t('hotels07')}
      />
      <ManageKeyboardScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={styles.keyboardAvoidView}>
        {renderMiddleView()}
      </ManageKeyboardScrollView>
    </SafeAreaView>
  );
};
export default BookHotelView;
