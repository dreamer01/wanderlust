import React, { Component } from 'react'
import { SafeAreaView, Text, TextInput, View } from 'react-native'

import I18n from '../../../localization/i18n'
import BaseNavigationHeader from '../../../Components/navigation-header/BaseNavigationHeader'
import AppButton from '../../../Components/base-componets/AppButton'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'

import styles from './styles'

class SignUpView extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    name: '',
    email: '',
    password: ''
  }

  signUpButtonAction = this.signUpButtonAction.bind(this)
  signInButtonAction = this.signInButtonAction.bind(this)

  signInButtonAction () {}

  signUpButtonAction() {

  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <BaseNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('signUp01')}
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
        {this.renderNameInput()}
        {this.renderEmailAddress()}
        {this.renderPasswordInput()}
        {this.renderSignButton()}
        {this.renderAlreadyAccountText()}
      </View>
    )
  }

  renderNameInput () {
    return (
      <TextInput
        underlineColorAndroid={'transparent'}
        ref={'nameTextField'}
        placeholder={I18n.t('signUp02')}
        autoCapitalize={'sentences'}
        returnKeyType={'next'}
        autoCorrect={false}
        style={styles.inputViewStyle}
        onChangeText={text => this.setState({ email: text })}
        onSubmitEditing={event => {
          this.refs.emailTextField.focus()
        }}
      />
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
        onSubmitEditing={this.signInButtonAction}
      />
    )
  }

  renderSignButton () {
    return (
      <AppButton
        title={I18n.t('welcome04')}
        onTouch={this.signUpButtonAction}
        styles={styles.signUpButtonStyle}
        textStyles={styles.signUpButtonTextStyle}
      />
    )
  }

  renderAlreadyAccountText () {
    return (
      <View style={styles.alreadyAccountContainer}>
        <Text style={styles.alreadyAccountText}>
            {I18n.t('signUp03') + " " }
          <Text
            onPress={this.forgotPasswordButtonAction}
            style={styles.signInButtonTextStyle}
          >
            {I18n.t('welcome03')}
          </Text>
        </Text>
      </View>
    )
  }
}

export default SignUpView;