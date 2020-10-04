import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, ImageBackground, View } from 'react-native'

import styles from './styles'

export default class PlaceRoundView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func,
    showNumberView: PropTypes.bool,
    number: PropTypes.string
  }

  static defaultProps = {
    showNumberView: false,
    onTouch: () => {}
  }

  render () {
    const { id } = this.props.info
    const imageConatainer = { left: (id - 1) * 10 }
    return (
      <View key={id} style={styles.main}>
        {<ImageBackground
          source={{ uri: this.props.info.image }}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={[styles.container, imageConatainer]}
        >
          {this.props.showNumberView && (
            <View style={styles.textContainer}>
              <Text style={styles.titleTextStyle}>{this.props.number}</Text>
            </View>
          )}
          </ImageBackground>}
      </View>
    )
  }
}
