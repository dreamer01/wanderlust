import React, { Component } from 'react'
import { SafeAreaView, View, Image, Text, TextInput } from 'react-native'
import PropTypes from 'prop-types'
import { NavigationActions } from 'react-navigation'

import Routes from '../../../Navigations/Routes'
import I18n from '../../../localization/i18n'
import { Icons } from '../../../Constants/Assets'
import { Places, Place } from '../../../Constants/Constants'
import AppButton from '../../../Components/base-componets/AppButton'
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'
import PlaceCollectionView from '../../../Components/PlaceCollectionView'

import styles from './styles'

class ProfileView extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    name: 'Maahi Bhama',
    email: 'maahibhama@gmail.com',
    password: 'way2sucess'
  }

  onClickRightButton = this.onClickRightButton.bind(this)
  logoutButtonAction = this.logoutButtonAction.bind(this)

  onClickRightButton () {}

  logoutButtonAction() {
    this.props.navigation.dispatch(NavigationActions.navigate({ routeName: Routes.AuthNavigator }))
  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <TitleNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('profile01')}
          showRightButton
          rightButtonIcon={Icons.profileEdit}
          onClickRightButton={this.onClickRightButton}
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
        {this.renderProfileInfoView()}
        {this.renderNameInput()}
        {this.renderEmailAddress()}
        {this.renderPasswordInput()}
        {this.renderVisitedPlaces()}
        {this.renderLogoutButton()}
      </View>
    )
  }

  renderProfileInfoView () {
    return (
      <View style={styles.profileView}>
        <View style={styles.imageContainer}>
        <Image
          source={{ uri: Place.url }}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.profileImage}
        />
        </View>
        <View style={styles.titleDetailsView}>
          <Text style={styles.titleText}>{'Maahi Bhama'}</Text>
          <Text style={styles.subtitleText}>{'A developer'}</Text>
        </View>
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
        value={this.state.name}
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
        value={this.state.email}
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
        value={this.state.password}
      />
    )
  }

  renderVisitedPlaces () {
    return (
      <PlaceCollectionView
        navigation={this.props.navigation}
        data={Places}
        headerTitle={I18n.t('profile02')}
      />
    )
  }

  renderLogoutButton() {
    return (
      <AppButton
        title={I18n.t('profile03')}
        onTouch={this.logoutButtonAction}
        styles={styles.logoutButtonStyle}
        textStyles={styles.logoutButtonTextStyle}
      />
    )
  }
}
export default ProfileView
