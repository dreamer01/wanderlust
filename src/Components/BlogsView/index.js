import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, FlatList } from 'react-native'

import ItemHeaderView from '../PlaceCollectionView/ItemHeaderView'
import BlogContainerView from './BlogContainerView'

import styles from './styles'

export default class BlogsView extends PureComponent {
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

  onTouchCategory (item) {
    // this.props.navigation.navigate(Routes.Featured)
  }

  render () {
      const { data } = this.props
    return (
      <View style={styles.containerView}>
        <ItemHeaderView title={this.props.headerTitle} />
        {this.renderItems({ items: data })}
      </View>
    )
  }

  renderItems ({ items }) {
    return items.map((item, i) => {
        return (<BlogContainerView key={i} info={item} />)
    })
  }
}
