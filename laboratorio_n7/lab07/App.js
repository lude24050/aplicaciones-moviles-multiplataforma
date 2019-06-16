/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
  createBottonTabNavigator
} from 'react-navigation';

import AuthLoadingScreen from '';


const AppStack = createDrawerNavigator({ Home: HomeScreen, other: chatScreen });
const AuthStack = createBottonTabNavigator({
  SignIn: SignInScreen,
  SignUp: SignUnScreeen
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading'
    }
  )
);