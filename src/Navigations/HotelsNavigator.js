import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import {Icons} from '../Constants/Assets';
import HotelsFeedView from '../Views/Hotels/HotelsFeedView';
import BookHotelView from '../Views/Hotels/BookHotelView';
import HotelDetailsView from '../Views/Hotels/HotelDetailsView';

import Routes from './Routes';

export const HotelsNavigator = createStackNavigator(
  {
    [Routes.HotelsFeedView]: {screen: HotelsFeedView},
    [Routes.BookHotelView]: {screen: BookHotelView},
    [Routes.HotelDetailsView]: {screen: HotelDetailsView }
  },
  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      title: 'Hotels',
      tabBarIcon: ({tintColor}) => (
        <Image source={Icons.hotels} style={{tintColor: tintColor}} />
      ),
    }),
    initialRouteName: Routes.HotelsFeedView,
  },
);
