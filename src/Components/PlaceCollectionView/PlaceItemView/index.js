import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, ImageBackground, View } from 'react-native'

import styles from '../styles'

export default class PlaceItemView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func
  }

  static defaultProps = {
    onTouch: () => {}
  }

  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onTouch}
        underlayColor={'transparent'}
        style={styles.touchView}
      >
        <ImageBackground
          source={{ uri: this.props.info.image }}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.container}
        >
          <View style={styles.textContainer}>
            <Text style={styles.titleTextStyle}>{this.props.info.name}</Text>
          </View>
        </ImageBackground>
      </TouchableHighlight>
    )
  }
}
