import React, { Component } from 'react'
import { SafeAreaView, View, Keyboard, TextInput } from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../../localization/i18n'
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'
import { Icons } from '../../../Constants/Assets'
import AppButton from '../../../Components/base-componets/AppButton'
import { FlightTripOptions } from '../../../Constants/Constants'
import { Color } from '../../../Constants/Colors'

import styles from './styles'

class FindHotelView extends Component {
  static navigationOptions = {
    header: null
  }

  static defaultProps = {}

  static propTypes = {}

  state = {
    isOneWaySelected: true
  }

  checkoutButtonAction = this.checkoutButtonAction.bind(this)

  checkoutButtonAction () {
    Keyboard.dismiss()
  }

  returnButtonAction ({ id }) {
    this.setState({ isOneWaySelected: id == FlightTripOptions.oneWay })
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('flights05')}
        />
        <ManageKeyboardScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.keyboardAvoidView}
        >
          {this.renderMiddleView()}
        </ManageKeyboardScrollView>
      </SafeAreaView>
    )
  }

  renderMiddleView () {
    return (
      <View>
        {this.renderOneWayReturnButton()}
        {this.renderFromInputView()}
        {this.renderToInputView()}
        {this.renderDateView()}
        {this.renderPassangerInputView()}
        {this.renderCheckoutButton()}
      </View>
    )
  }

  renderOneWayReturnButton () {
    const isSelected = this.state.isOneWaySelected
    return (
      <View style={styles.oneWayReturnButtonContainer}>
        {this.renderButton({
          isSelected: isSelected,
          title: I18n.t('flights07'),
          id: FlightTripOptions.oneWay
        })}
        {this.renderButton({
          isSelected: !isSelected,
          title: I18n.t('flights08'),
          id: FlightTripOptions.render
        })}
      </View>
    )
  }

  renderButton ({ isSelected, title, id }) {
    const containerStyle = isSelected
      ? { backgroundColor: Color.themeDark }
      : { backgroundColor: Color.offWhiteBackground }
    const textStyle = isSelected
      ? { color: Color.brightText }
      : { color: Color.darkText }
    return (
      <AppButton
        title={title}
        onTouch={() => this.returnButtonAction({ id })}
        styles={[styles.oneWayButton, containerStyle]}
        textStyles={[styles.oneWayButtonText, textStyle]}
      />
    )
  }

  renderFromInputView () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'fromTextField'}
        placeholder={I18n.t('flights09')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ from: text })}
        onSubmitEditing={event => {
          this.refs.toTextField.focus()
        }}
        value={this.state.from}
      />
    )
  }

  renderToInputView () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'fromTextField'}
        placeholder={I18n.t('flights10')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ to: text })}
        onSubmitEditing={event => {
          this.refs.toTextField.focus()
        }}
        value={this.state.to}
      />
    )
  }

  renderDateView () {
    return (
      <View style={styles.dateView}>
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={'fromTextField'}
          placeholder={I18n.t('flights11')}
          autoCapitalize={'sentences'}
          returnKeyType={'next'}
          autoCorrect={false}
          style={styles.dateInputView}
          onChangeText={text => this.setState({ to: text })}
          onSubmitEditing={event => {
            this.refs.toTextField.focus()
          }}
          value={this.state.to}
        />
        {!this.state.isOneWaySelected && <View style={styles.lineView} />}
        {!this.state.isOneWaySelected && <TextInput
          underlineColorAndroid={'transparent'}
          ref={'fromTextField'}
          placeholder={I18n.t('flights12')}
          autoCapitalize={'sentences'}
          returnKeyType={'next'}
          autoCorrect={false}
          style={styles.dateInputView}
          onChangeText={text => this.setState({ to: text })}
          onSubmitEditing={event => {
            this.refs.toTextField.focus()
          }}
          value={this.state.to}
        />}
      </View>
    )
  }

  renderPassangerInputView () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'passangerTextField'}
        placeholder={I18n.t('flights13')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ from: text })}
        onSubmitEditing={event => {
          this.checkoutButtonAction()
        }}
        value={this.state.from}
      />
    )
  }

  renderCheckoutButton () {
    return (
      <AppButton
        title={I18n.t('flights06')}
        onTouch={this.checkoutButtonAction}
        styles={styles.checkoutButtonStyle}
        textStyles={styles.checkoutButtonTextStyle}
      />
    )
  }
}
export default FindHotelView
