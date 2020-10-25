import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import Routes from './Routes';
import WelcomeView from '../Views/GetStarted/WelcomeView';
import {TabNavigator} from './TabNavigator';

const AppNavigator = createSwitchNavigator(
  {
    [Routes.TabNavigator]: TabNavigator,
    [Routes.WelcomeView]: WelcomeView,
  },
  {
    headerMode: 'none',
    initialRouteName: Routes.WelcomeView,
  },
);

export default createAppContainer(AppNavigator);
