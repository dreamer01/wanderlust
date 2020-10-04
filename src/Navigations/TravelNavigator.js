import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Icons } from '../Constants/Assets'
import TravelFeedView from '../Views/Travel/TravelFeedView'
import I18n from '../localization/i18n'

import Routes from './Routes'

export const TravelNavigator = createStackNavigator(
  {
    [Routes.TravelFeedView]: { screen: TravelFeedView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: I18n.t('travel01'),
      tabBarIcon: ({ tintColor }) => (
        <Image source={Icons.travel} style={{ tintColor: tintColor }} />
      )
    }),
    initialRouteName: Routes.TravelFeedView
  }
)
