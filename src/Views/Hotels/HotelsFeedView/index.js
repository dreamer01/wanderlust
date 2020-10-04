import React, { Component } from 'react'
import { SafeAreaView, View } from 'react-native'
import PropTypes from 'prop-types'

import I18n from '../../../localization/i18n'
import TitleNavigationHeader from '../../../Components/navigation-header/TitleNavigationHeader'
import ManageKeyboardScrollView from '../../../Constants/ManageKeyboardScrollView'
import SearchBarView from '../../../Components/SearchBarView'
import PlaceCollectionView from '../../../Components/PlaceCollectionView'

import styles from './styles'
import { Icons } from '../../../Constants/Assets'
import { Places } from '../../../Constants/Constants'
import OfferCollectionView from '../../../Components/OfferCollectionView'
import Routes from '../../../Navigations/Routes'

class HotelsFeedView extends Component {
  static navigationOptions = {
    header: null
  }

  static defaultProps = {}

  static propTypes = {}

  state ={
    searchText: ''
  }

  onClickRightButton = this.onClickRightButton.bind(this)
  onChangeText = this.onChangeText(this)

  onClickRightButton () {
    this.props.navigation.navigate(Routes.FindHotelView)
  }

  onChangeText() {

  }

  render () {
    return (
      <SafeAreaView style={styles.container}>
        <TitleNavigationHeader
          navigation={this.props.navigation}
          title={I18n.t('hotels01')}
          showRightButton
          rightButtonIcon={Icons.filter}
          onClickRightButton={this.onClickRightButton}
        />
        <ManageKeyboardScrollView
          keyboardShouldPersistTaps={'always'}
          contentContainerStyle={styles.keyboardAvoidView}
        >
          {this.renderMiddleView()}
        </ManageKeyboardScrollView>
      </SafeAreaView>
    )
  }

  renderMiddleView () {
    return (
      <View style={styles.middleView}>
        {this.renderSearchBar()}
        {this.renderPopulorDestination()}
        {this.renderOfferCollectionView()}
        {this.renderTopCity()}
      </View>
    )
  }

  renderSearchBar () {
    return (
      <SearchBarView
        setRef={this.setRef}
        title={I18n.t('hotels02')}
        searchText={this.state.searchText}
        onChangeText={this.onChangeText}
      />
    )
  }

  renderPopulorDestination () {
    return (
      <PlaceCollectionView
        navigation={this.props.navigation}
        data={Places}
        headerTitle={I18n.t('hotels03')}
      />
    )
  }

  renderOfferCollectionView () {
    return (
      <OfferCollectionView
        data={Places}
        navigation={this.props.navigation}
        headerTitle={I18n.t('hotels04')}
      />
    )
  }

  renderTopCity () {
    return (
      <PlaceCollectionView
        navigation={this.props.navigation}
        data={Places}
        headerTitle={I18n.t('hotels05')}
      />
    )
  }
}
export default HotelsFeedView