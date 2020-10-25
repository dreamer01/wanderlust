import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import {Icons} from '../Constants/Assets';
import ChatbotView from '../Views/Chatbot/ChatbotView';

import Routes from './Routes';

export const ChatbotNavigator = createStackNavigator(
  {
    [Routes.ChatbotView]: {screen: ChatbotView},
  },
  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      gesturesEnabled: false,
      title: 'Chatbot',
      tabBarIcon: ({tintColor}) => (
        <Image source={Icons.chatbot} style={{tintColor: tintColor}} />
      ),
    }),
    initialRouteName: Routes.ChatbotView,
  },
);
