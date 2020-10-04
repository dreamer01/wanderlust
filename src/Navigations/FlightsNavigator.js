import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Icons } from '../Constants/Assets'
import FlightsFeedView from '../Views/Flights/FlightsFeedView'
import FindFlightView from '../Views/Flights/FindFlightView'

import Routes from './Routes'

export const FlightsNavigator = createStackNavigator(
  {
    [Routes.FlightsFeedView]: { screen: FlightsFeedView },
    [Routes.FindFlightView]: {screen: FindFlightView}
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: 'Flights',
      tabBarIcon: ({ tintColor }) => (
        <Image source={Icons.flight} style={{ tintColor: tintColor }} />
      )
    }),
    initialRouteName: Routes.FlightsFeedView
  }
)
