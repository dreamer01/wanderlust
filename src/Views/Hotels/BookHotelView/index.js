import React, {Component} from 'react';
import {SafeAreaView, View, Keyboard, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';

import I18n from '../../../localization/i18n';
import {FlightTripOptions} from '../../../Constants/Constants';
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import AppButton from '../../../Components/base-componets/AppButton';

import styles from './styles';
import {AppFont} from '../../../Constants/Fonts';

// TODO: On click of book generate a hash value as booking Id and add booking info to Dgraph with userId
class BookHotelView extends Component {
  static navigationOptions = {
    header: null,
  };

  static defaultProps = {};

  static propTypes = {};

  state = {
    isOneWaySelected: true,
    checkInDate: null,
    checkOutDate: null,
  };

  bookButtonAction = this.bookButtonAction.bind(this);

  bookButtonAction() {
    Keyboard.dismiss();
  }

  returnButtonAction({id}) {
    this.setState({isOneWaySelected: id == FlightTripOptions.oneWay});
  }

  renderMiddleView() {
    return (
      <View>
        {this.renderFromInputView()}
        {this.renderToInputView()}
        {this.renderPassengerInputView()}
        {this.renderBookButton()}
      </View>
    );
  }

  renderFromInputView() {
    return (
      <View style={styles.dateView}>
        <DatePicker
          style={styles.dateInputView}
          date={this.state.checkInDate}
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
          onDateChange={date => {
            this.setState({checkInDate: date});
          }}
        />
      </View>
    );
  }

  renderToInputView() {
    return (
      <View style={styles.dateView}>
        <DatePicker
          style={styles.dateInputView}
          date={this.state.checkOutDate}
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
          onDateChange={date => {
            this.setState({checkOutDate: date});
          }}
        />
      </View>
    );
  }

  renderPassengerInputView() {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        placeholder={I18n.t('hotels10')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({from: text})}
        onSubmitEditing={event => {
          this.bookButtonAction();
        }}
        value={this.state.from}
      />
    );
  }

  renderBookButton() {
    return (
      <AppButton
        title={I18n.t('hotels06')}
        onTouch={this.bookButtonAction}
        styles={styles.bookButtonStyle}
        textStyles={styles.bookButtonTextStyle}
      />
    );
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('hotels07')}
        />
        <ManageKeyboardScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.keyboardAvoidView}>
          {this.renderMiddleView()}
        </ManageKeyboardScrollView>
      </SafeAreaView>
    );
  }
}
export default BookHotelView;
