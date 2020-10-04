import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import PlaceRoundView from '../PlaceRoundView'

import styles from '../styles'

export default class PlaceContainerView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    headerTitle: PropTypes.string
  }

  static defaultProps = {
    data: [],
    headerTitle: ''
  }

  renderItem = this.renderItem.bind(this)

  onClickSeeAll () {
    // this.props.navigation.navigate(Routes.Featured)
  }

  onTouchCategory (item) {
    // this.props.navigation.navigate(Routes.Featured)
  }

  getItems () {
    return this.props.data.slice(0, 4)
  }

  remainingItems () {
    let items = this.props.data.slice(4)
    let itemCount = items.length
    if (itemCount > 0 || itemCount < 10) {
      return '+' + itemCount
    }
    return '+10'
  }

  render () {
    return (
        <FlatList
          extraData={this.state}
          data={this.getItems()}
          numColumns={4}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
          style={styles.placeTableView}
        />
    )
  }

  renderItem ({ item, index }) {
    let showNumberView = index == 3
    let numberOfRemainingItem = index == 3 ? this.remainingItems() : ''

    return (
      <PlaceRoundView
        showNumberView={showNumberView}
        number={numberOfRemainingItem}
        info={item}
        onTouch={() => {
          this.onTouchCategory(item)
        }}
      />
    )
  }
}
