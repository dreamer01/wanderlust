import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, Text, Image, View} from 'react-native';

import {Icons} from '../../../Constants/Assets';
import {Color} from '../../../Constants/Colors';

import styles from '../styles';

export default class BlogContainerView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func,
    isFavorite: PropTypes.bool,
  };

  static defaultProps = {
    onTouch: () => {},
    isFavorite: false,
  };

  state = {
    isFavorite: this.props.isFavorite,
  };

  onClickFavoriteButton = this.onClickFavoriteButton.bind(this);

  onClickFavoriteButton() {
    this.setState({isFavorite: !this.state.isFavorite});
  }

  render() {
    const {info} = this.props;
    return (
      <TouchableHighlight
        onPress={this.props.onTouch}
        underlayColor={Color.transparent}
        style={styles.touchView}>
        <View style={styles.container}>
          <Image
            source={{uri: info.cover}}
            resizeMode={'cover'}
            resizeMethod={'resize'}
            style={styles.imageContainer}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleTextStyle}>{info.name}</Text>
            <Text style={styles.subtitleTextStyle}>{info.country.name}</Text>
            <Text numberOfLines={6} style={styles.detailsTextStyle}>
              {info.description}
            </Text>
          </View>
          {this.renderFavoriteButton({isFavorite: this.state.isFavorite})}
        </View>
      </TouchableHighlight>
    );
  }

  renderFavoriteButton({isFavorite}) {
    const icon = isFavorite ? Icons.heartSelected : Icons.heartUnselected;
    return (
      <View style={styles.favoriteButtonContainer}>
        <TouchableHighlight
          onPress={this.onClickFavoriteButton}
          underlayColor={'transparent'}
          style={styles.favoriteButton}>
          <Image
            source={icon}
            resizeMode={'contain'}
            style={styles.favtButtonIcon}
          />
        </TouchableHighlight>
      </View>
    );
  }
}
