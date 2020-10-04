import React from 'react'
import { Image } from 'react-native'
import { createStackNavigator } from 'react-navigation'

import { Icons } from '../Constants/Assets'
import ProfileView from '../Views/Profile/ProfileView'

import Routes from './Routes'

export const ProfileNavigator = createStackNavigator(
  {
    [Routes.ProfileView]: { screen: ProfileView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false,
      title: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Image source={Icons.profile} style={{ tintColor: tintColor }} />
      )
    }),
    initialRouteName: Routes.ProfileView
  }
)
