import React, {PureComponent} from 'react';
import {View, FlatList} from 'react-native';
import PropTypes from 'prop-types';

import Routes from '../../Navigations/Routes';
import PlaceItemView from './PlaceItemView';
import ItemHeaderView from './ItemHeaderView';
import styles from './styles';

export default class PlaceCollectionView extends PureComponent {
  static propTypes = {
    showDetails: PropTypes.bool,
    data: PropTypes.array,
    headerTitle: PropTypes.string,
    navigation: PropTypes.object.isRequired,
  };

  static defaultProps = {
    data: [],
    headerTitle: '',
    showDetails: true,
  };

  renderItem = this.renderItem.bind(this);

  onTouchCategory(item) {
    if (this.props.showDetails)
      this.props.navigation.navigate(Routes.PlaceDetailsView, {info: item});
  }

  render() {
    return (
      <View style={styles.containerView}>
        <ItemHeaderView title={this.props.headerTitle} />
        <FlatList
          extraData={this.state}
          data={this.props.data}
          horizontal
          renderItem={this.renderItem}
          keyExtractor={(item, index) => item.name}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tableView}
        />
      </View>
    );
  }

  renderItem({item}) {
    return (
      <PlaceItemView
        info={item}
        onTouch={() => {
          this.onTouchCategory(item);
        }}
      />
    );
  }
}
