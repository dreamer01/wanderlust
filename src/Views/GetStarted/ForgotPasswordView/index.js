import React, { Component } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'

import I18n from '../../../localization/i18n'
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader'
import AppButton from '../../../Components/base-componets/AppButton'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView';

import styles from './styles'

class ForgotPasswordView extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: ''
  }

  renderSumbitButton = this.renderSumbitButton.bind(this)

  renderSumbitButton () {}

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('forgotPassword01')}
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
      <View style={styles.middleView}>
        {this.renderEmailAddress()}
        {this.renderSumbitButton()}
      </View>
    )
  }

  renderEmailAddress () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'emailTextField'}
        placeholder={I18n.t('signIn02')}
        keyboardType={'email-address'}
        autoCapitalize={'none'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ email: text })}
        onSubmitEditing={event => {
          this.refs.passwordTextField.focus()
        }}
      />
    )
  }

  renderSumbitButton () {
    return (
      <AppButton
        title={I18n.t('forgotPassword01')}
        onTouch={this.signInButtonAction}
        styles={styles.signInButtonStyle}
        textStyles={styles.signInButtonTextStyle}
      />
    )
  }
}

export default ForgotPasswordView;