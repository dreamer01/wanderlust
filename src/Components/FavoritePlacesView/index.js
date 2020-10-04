import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import PlaceView from './PlaceView'
import styles from './styles'
import DotView from './DotView'

export default class FavoritePlacesView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    navigation: PropTypes.object.isRequired
  }

  static defaultProps = {
    data: []
  }

  state = {
    viewedIndex: 0
  }

  renderItem = this.renderItem.bind(this)
  handleViewableItemsChanged = this.handleViewableItemsChanged.bind(this)

  onClickSeeAll () {
    // this.props.navigation.navigate(Routes.Featured)
  }

  onTouchCategory (item) {
    // this.props.navigation.navigate(Routes.Featured)
  }

  handleViewableItemsChanged (info) {
    if (info.viewableItems[0] != null) {
      let indexValue = info.viewableItems[0].index
      this.setState({ viewedIndex: indexValue })
    }
  }

  render () {
    const { data } = this.props

    return (
      <View style={styles.containerView}>
        <FlatList
          extraData={this.state}
          data={data}
          horizontal
          pagingEnabled
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tableView}
          onViewableItemsChanged={this.handleViewableItemsChanged}
        />
        {this.renderDotView({ data: data })}
      </View>
    )
  }

  renderItem ({ item }) {
    return (
      <PlaceView
        info={item}
        onTouch={() => {
          this.onTouchCategory(item)
        }}
      />
    )
  }

  renderDotView ({ data }) {
    return <DotView data={data} selectedItemIndex={this.state.viewedIndex} />
  }
}
