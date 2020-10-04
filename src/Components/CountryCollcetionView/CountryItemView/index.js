import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, View } from 'react-native'

import { Color } from '../../../Constants/Colors'

import styles from '../styles'

export default class CountryItemView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func,
    isSelected: PropTypes.bool
  }

  static defaultProps = {
    onTouch: () => {},
    isSelected: false
  }

  render () {
    const { name } = this.props.info
    const { isSelected } = this.props
    let textContainer =
      isSelected == true ? { backgroundColor: Color.themeDark } : {}
    let textStyle = isSelected == true ? { color: Color.brightText } : {}
    return (
      <TouchableHighlight
        onPress={this.props.onTouch}
        underlayColor={'transparent'}
        style={styles.touchView}
      >
        <View style={[styles.textContainer, textContainer]}>
          <Text style={[styles.titleTextStyle, textStyle]}>{name}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}
