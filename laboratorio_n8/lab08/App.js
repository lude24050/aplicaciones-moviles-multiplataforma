import { createAppContainer, createSwitchNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import AuthLoadingScreen from './src/screens/AuthLoadingScreen/AuthLoadingScreen';
import SingInScreen from './src/screens/SingIn/SingIn';
import SingUpScreen from './src/screens/SingUp/SingUp';
import HomeScreen from './src/screens/Home/Home';
import ChatScreen from './src/screens/Chat/Chat';

const AppStack = createDrawerNavigator({ Home: HomeScreen, Other: ChatScreen });
const AuthStack = createBottomTabNavigator({
  SingIn: SingInScreen,
  SingUp: SingUpScreen
});
export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);
