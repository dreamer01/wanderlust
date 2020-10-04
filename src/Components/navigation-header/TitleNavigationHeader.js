import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight, Image, StyleSheet, Text } from 'react-native'

import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import { Icons } from '../../Constants/Assets'

export default class TitleNavigationHeader extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    title: PropTypes.string,
    showRightButton: PropTypes.bool,
    showBackButton: PropTypes.bool,
    rightButtonIcon: PropTypes.any,
    onClickRightButton: PropTypes.func
  }

  static defaultProps = {
    title: '',
    showBackButton: false,
    showRightButton: false,
    onClickRightButton: () => {}
  }

  render () {
    return (
      <View>
        {this.props.showBackButton && (
          <TouchableHighlight
            onPress={() => {
              this.props.navigation.goBack()
            }}
            underlayColor={Color.themeBackground}
            style={styles.backIconStyle}
          >
            <Image source={Icons.back} style={styles.backIcon} />
          </TouchableHighlight>
        )}
        <View style={styles.container}>
          {this.props.showRightButton && (
            <View style={styles.rightView}>
              {this.props.title && (
                <View style={styles.topView}>
                  <Text style={styles.headerTitle}>{this.props.title}</Text>
                </View>
              )}
              <TouchableHighlight
                onPress={this.props.onClickRightButton}
                underlayColor={Color.themeBackground}
                style={styles.backIconStyle}
              >
                <Image
                  source={this.props.rightButtonIcon}
                  style={styles.backIcon}
                />
              </TouchableHighlight>
            </View>
          )}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row'
  },
  rightView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  backIconStyle: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  topView: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  headerTitle: {
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText
  }
})
