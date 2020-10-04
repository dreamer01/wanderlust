import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import CountryItemView from './CountryItemView'
import styles from './styles'

export default class CountryCollcetionView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    onTouch: PropTypes.func
  }

  static defaultProps = {
    onTouch: () => {},
    data: []
  }

  state = {
    selectedIndex: 0
  }

  renderItem = this.renderItem.bind(this)

  onTouchCategory ({ item, index }) {
    this.setState({ selectedIndex: index })
    this.props.onTouch(item)
    // this.props.navigation.navigate(Routes.Featured)
  }

  render () {
    return (
      <FlatList
        extraData={this.state}
        data={this.props.data}
        horizontal
        renderItem={this.renderItem}
        keyExtractor={(item, index) => item.id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tableView}
      />
    )
  }

  renderItem ({ item, index }) {
    return (
      <CountryItemView
        info={item}
        isSelected={index == this.state.selectedIndex}
        onTouch={() => {
          this.onTouchCategory({ item, index })
        }}
      />
    )
  }
}
