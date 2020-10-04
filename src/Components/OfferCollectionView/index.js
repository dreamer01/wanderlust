import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import ItemHeaderView from '../PlaceCollectionView/ItemHeaderView'
import OfferContainerView from './OfferContainerView'

import styles from './styles'

export default class OfferCollectionView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    headerTitle: PropTypes.string,
    navigation: PropTypes.object.isRequired
  }

  static defaultProps = {
    data: [],
    headerTitle: ''
  }

  onClickSeeAll () {
    // this.props.navigation.navigate(Routes.Featured)
  }

  onTouchOffer (item) {
    // this.props.navigation.navigate(Routes.Featured)
  }

  render () {
    const { data } = this.props
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

  renderItem ({ item, index }) {
    return (
      <OfferContainerView info={item} onTouch={this.onTouchOffer} />
    )
  }
}
