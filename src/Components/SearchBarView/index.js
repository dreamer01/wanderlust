import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Image, TextInput } from 'react-native'

import { Icons } from '../../Constants/Assets'

import styles from './styles'

export default class SearchBarView extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    searchText: PropTypes.string,
    onChangeText: PropTypes.func,
    setRef: PropTypes.func
  }

  static defaultProps = {
    title: '',
    searchText: '',
    onChangeText: () => {},
    setRef: () => {}
  }

  render () {
    return (
      <View style={styles.searchBarStyle}>
        <View style={styles.searchBarButton}>
          <Image source={Icons.search} style={styles.searchIconStyle} />
        </View>
        <View style={styles.lineView} />
        <TextInput
          underlineColorAndroid={'transparent'}
          ref={this.props.setRef}
          placeholder={this.props.title}
          returnKeyType={'search'}
          autoCorrect={false}
          style={styles.inputViewStyle}
          onChangeText={this.props.onChangeText}
          onSubmitEditing={event => {}}
        />
      </View>
    )
  }
}
