import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';

import ItemHeaderView from '../PlaceCollectionView/ItemHeaderView';
import BlogContainerView from './BlogContainerView';

import styles from './styles';
import Routes from '../../Navigations/Routes';

export default class BlogsView extends PureComponent {
  static propTypes = {
    data: PropTypes.array,
    headerTitle: PropTypes.string,
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: [],
    headerTitle: '',
  };

  onTouchCategory = this.onTouchCategory.bind(this);

  onClickSeeAll() {
    // this.props.navigation.navigate(Routes.Featured)
  }

  onTouchCategory(item) {
    this.props.navigation.navigate(Routes.PlaceDetailsView, { info: item })
  }

  render() {
    const {data} = this.props;
    return (
      <View style={styles.containerView}>
        <ItemHeaderView title={this.props.headerTitle} />
        {this.renderItems({items: data})}
      </View>
    );
  }

  renderItems({items}) {
    return items.map((item, i) => {
      return <BlogContainerView key={i} info={item} onTouch={this.onTouchCategory} />;
    });
  }
}
