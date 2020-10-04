import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import PlaceItemView from './PlaceItemView'
import ItemHeaderView from './ItemHeaderView'
import styles from './styles'

export default class PlaceCollectionView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    headerTitle: PropTypes.string,
    navigation: PropTypes.object.isRequired
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

  render () {
    return (
      <View style={styles.containerView}>
        <ItemHeaderView title={this.props.headerTitle} />
        <FlatList
          extraData={this.state}
          data={this.props.data}
          horizontal
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tableView}
        />
      </View>
    )
  }

  renderItem ({ item }) {
    return (
      <PlaceItemView
        info={item}
        onTouch={() => {
          this.onTouchCategory(item)
        }}
      />
    )
  }
}
