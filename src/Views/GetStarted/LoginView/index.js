import React, { Component } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'

import I18n from '../../../localization/i18n'
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader'
import AppButton from '../../../Components/base-componets/AppButton'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'

import styles from './styles'
import Routes from '../../../Navigations/Routes'

class LoginView extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: '',
    password: ''
  }

  signInButtonAction = this.signInButtonAction.bind(this)
  forgotPasswordButtonAction = this.forgotPasswordButtonAction.bind(this)

  signInButtonAction () {
    this.props.navigation.navigate(Routes.TabNavigator)
  }

  forgotPasswordButtonAction () {
    this.props.navigation.navigate(Routes.ForgotPasswordView)
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('signIn01')}
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
        {this.renderPasswordInput()}
        {this.renderSignButton()}
        {this.renderForgetButton()}
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

  renderPasswordInput () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'passwordTextField'}
        placeholder={I18n.t('signIn03')}
        returnKeyType={'done'}
        autoCapitalize={'none'}
        autoCorrect={false}
        secureTextEntry={!this.state.isShowingPassword}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ password: text })}
        onSubmitEditing={event => {
          this.logInButtonAction()
        }}
      />
    )
  }

  renderSignButton () {
    return (
      <AppButton
        title={I18n.t('welcome03')}
        onTouch={this.signInButtonAction}
        styles={styles.signInButtonStyle}
        textStyles={styles.signInButtonTextStyle}
      />
    )
  }

  renderForgetButton () {
    return (
      <View style={styles.forgotButtonContainer}>
        <Text
          onPress={this.forgotPasswordButtonAction}
          style={styles.forgotButtonText}
        >
          {I18n.t('signIn04')}
        </Text>
      </View>
    )
  }
}

export default LoginView