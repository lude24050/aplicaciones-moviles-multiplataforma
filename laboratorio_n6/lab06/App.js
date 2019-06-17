/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import { createBottomTabNavigator, createStackNavigator, createAppContainer, createDrawerNavigator } from "react-navigation";

import HomeScreen from './src/screens/Home';
import DetailsScreen from './src/screens/Details';
import ProfileScreen from './src/screens/Profile';


const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    path: 'home/',
    navigationOptions: {
      title: 'Esta es la Home'
    }
  },
  Details: DetailsScreen,
  Profile: ProfileScreen,
},
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: 'Un titulo generico',
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });

export default createAppContainer(AppNavigator);