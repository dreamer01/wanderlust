import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Icons } from '../Constants/Assets'
import ChartbotView from '../Views/Chartbot/ChartbotView'

import Routes from './Routes'

export const ChartbotNavigator = createStackNavigator(
  {
    [Routes.ChartbotView]: { screen: ChartbotView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: 'Chartbot',
      tabBarIcon: ({ tintColor }) => (
        <Image source={Icons.chartbot} style={{ tintColor: tintColor }} />
      )
    }),
    initialRouteName: Routes.ChartbotView
  }
)
