import React, {Component} from 'react';
import {SafeAreaView, View, Keyboard, TextInput} from 'react-native';
import DatePicker from 'react-native-datepicker';

import I18n from '../../../localization/i18n';
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader';
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';
import {Icons} from '../../../Constants/Assets';
import AppButton from '../../../Components/base-componets/AppButton';
import {FlightTripOptions} from '../../../Constants/Constants';
import {Color} from '../../../Constants/Colors';

import styles from './styles';
import {AppFont} from '../../../Constants/Fonts';
import AppStyles from '../../../Constants/AppStyles';

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
        {/* {this.renderDateView()} */}
        {this.renderPassangerInputView()}
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
              borderWidth: 0
            },
            dateText:{
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left'
            },
            placeholderText:{
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left'
            }
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
              borderWidth: 0
            },
            dateText:{
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left'
            },
            placeholderText:{
              fontSize: AppFont.title.size,
              fontFamily: AppFont.title.name,
              fontWeight: AppFont.title.weight,
              textAlign: 'left'
            }
          }}
          onDateChange={date => {
            this.setState({checkOutDate: date});
          }}
        />
      </View>
    );
  }

  renderDateView() {
    return (
      <View style={styles.dateView}>
        <TextInput
          underlineColorAndroid={'transparent'}
          placeholder={I18n.t('flights11')}
          autoCapitalize={'sentences'}
          returnKeyType={'next'}
          autoCorrect={false}
          style={styles.dateInputView}
          onChangeText={text => this.setState({to: text})}
          onSubmitEditing={event => {}}
          value={this.state.to}
        />
        {!this.state.isOneWaySelected && <View style={styles.lineView} />}
        {!this.state.isOneWaySelected && (
          <TextInput
            underlineColorAndroid={'transparent'}
            placeholder={I18n.t('flights12')}
            autoCapitalize={'sentences'}
            returnKeyType={'next'}
            autoCorrect={false}
            style={styles.dateInputView}
            onChangeText={text => this.setState({to: text})}
            onSubmitEditing={event => {}}
            value={this.state.to}
          />
        )}
      </View>
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

  renderPassangerInputView() {
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
