import {createBottomTabNavigator} from 'react-navigation';
import {Image} from 'react-native';

import {TravelNavigator} from './TravelNavigator';
import {FlightsNavigator} from './FlightsNavigator';
import {ChatbotNavigator} from './ChatbotNavigator';
import {HotelsNavigator} from './HotelsNavigator';
import {ProfileNavigator} from './ProfileNavigator';

import Routes from './Routes';
import {Icons} from '../Constants/Assets';
import {Color} from '../Constants/Colors';

export const TabNavigator = createBottomTabNavigator(
  {
    [Routes.TravelNavigator]: {screen: TravelNavigator},
    // [Routes.FlightsNavigator]: {screen: FlightsNavigator},
    [Routes.HotelsNavigator]: {screen: HotelsNavigator},
    [Routes.ChatbotNavigator]: {screen: ChatbotNavigator},
    [Routes.ProfileNavigator]: {screen: ProfileNavigator},
  },
  {
    headerMode: 'none',
    defaultNavigationOptions: ({navigation}) => ({
      tabBarOptions: {
        activeTintColor: Color.themeDark,
        inactiveTintColor: Color.defaultTheme,
      },
    }),
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
    }),
    initialRouteName: Routes.TravelNavigator,
  },
);
