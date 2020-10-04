import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Routes from './Routes'
import { AuthNavigator } from './AuthNavigator'
import AuthLoadingView from '../Views/GetStarted/AuthLoadingView'
import { TabNavigator } from './TabNavigator'

const AppNavigator = createSwitchNavigator(
  {
    [Routes.AuthLoadingView]: AuthLoadingView,
    [Routes.TabNavigator]: TabNavigator,
    [Routes.AuthNavigator]: AuthNavigator
  },
  {
    initialRouteName: Routes.AuthLoadingView
  }
)

export default createAppContainer(AppNavigator)
