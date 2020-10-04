import React, { Component } from 'react'
import { ImageBackground } from 'react-native'
import PropTypes from 'prop-types'

import Routes from '../../../Navigations/Routes'
import { Images } from '../../../Constants/Assets'

import styles from './styles'

class AuthLoadingView extends Component {
  constructor (props) {
    super(props)
    this.fetchData()
  }

  static contextTypes = {
    presentActivityIndicator: PropTypes.func.isRequired,
    dismissActivityIndicator: PropTypes.func.isRequired,
    showAlert: PropTypes.func.isRequired
  }

  fetchData = async () => {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate(Routes.AuthNavigator)
    }, 2000)
  }

  render () {
    return <ImageBackground source={Images.splash} style={styles.container} />
  }
}


export default AuthLoadingView;
