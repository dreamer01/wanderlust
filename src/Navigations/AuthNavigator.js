import { createStackNavigator } from 'react-navigation'
import WelcomeView from '../Views/GetStarted/WelcomeView'
import LoginView from '../Views/GetStarted/LoginView'
import SignUpView from '../Views/GetStarted/SignUpView'
import Routes from './Routes'
import ForgotPasswordView from '../Views/GetStarted/ForgotPasswordView'

export const AuthNavigator = createStackNavigator(
  {
    [Routes.WelcomeView]: { screen: WelcomeView },
    [Routes.LoginView]: { screen: LoginView },
    [Routes.SignUpView]: { screen: SignUpView },
    [Routes.ForgotPasswordView]: { screen: ForgotPasswordView }
  },
  {
    navigationOptions: ({ navigation }) => ({
      gesturesEnabled: false
    }),
    initialRouteName: Routes.WelcomeView
  }
)
