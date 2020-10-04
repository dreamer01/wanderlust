import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TouchableHighlight, Text, Image, View } from 'react-native'

import { Icons } from '../../../Constants/Assets'
import { Color } from '../../../Constants/Colors'

import styles from '../styles'

export default class BlogContainerView extends PureComponent {
  static propTypes = {
    info: PropTypes.object.isRequired,
    onTouch: PropTypes.func,
    isFavourite: PropTypes.bool
  }

  static defaultProps = {
    onTouch: () => {},
    isFavourite: false
  }

  state = {
    isFavourite: this.props.isFavourite
  }

  onClickFavoriteButton = this.onClickFavoriteButton.bind(this)

  onClickFavoriteButton () {
    this.setState({ isFavourite: !this.state.isFavourite })
  }

  render () {
    const { info } = this.props
    return (
      <TouchableHighlight
        onPress={this.props.onTouch}
        underlayColor={Color.transparent}
        style={styles.touchView}
      >
        <View style={styles.container}>
          <Image
            source={{ uri: info.image }}
            resizeMode={'cover'}
            resizeMethod={'resize'}
            style={styles.imageContainer}
          />
          <View style={styles.textContainer}>
            <Text style={styles.titleTextStyle}>{info.name}</Text>
            <Text style={styles.subtitleTextStyle}>{"Indonesia"}</Text>
            <Text numberOfLines={3} style={styles.detailsTextStyle}>{"A pagoda is a tiered tower with multiple eaves,  built in traditions originating as stupa in historic  South Asia and further developed   READ MORE"}</Text>
          </View>
          {this.renderFavouriteButton({ isFavourite: this.state.isFavourite })}
        </View>
      </TouchableHighlight>
    )
  }

  renderFavouriteButton ({ isFavourite }) {
    const icon = isFavourite ? Icons.heartSelected : Icons.heartUnselected
    return (
      <View style={styles.favouriteButtonContainer}>
        <TouchableHighlight
          onPress={this.onClickFavoriteButton}
          underlayColor={'transparent'}
          style={styles.favouriteButton}
        >
          <Image
            source={icon}
            resizeMode={'contain'}
            style={styles.favtButtonIcon}
          />
        </TouchableHighlight>
      </View>
    )
  }
}
