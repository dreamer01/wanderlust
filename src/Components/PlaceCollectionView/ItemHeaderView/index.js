import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, Text } from 'react-native'

import styles from '../styles'

export default class ItemHeaderView extends PureComponent {
  static propTypes = {
    title: PropTypes.string,
    onClickSeeAll: PropTypes.func,
    showSeeAllText: PropTypes.bool
  }

  static defaultProps = {
    title: '',
    onClickSeeAll: () => {},
    showSeeAllText: false
  }

  render () {
    return (
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitleTextStyle}>{this.props.title}</Text>
        {this.props.showSeeAllText && (
          <Text
            style={styles.sellAllTextStyle}
            onPress={this.props.onClickSeeAll}
          >
            {'See all'}
          </Text>
        )}
      </View>
    )
  }
}
