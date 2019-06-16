import React from 'react';
import { View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
            title: 'Bienvenido a la App!',
            TabBarIcon: ({ focused, horizontal, tintColor}) => {
                return <Ionicons name="ios-clipboard" size={25} color={tintColor}/>
            }
    };
    _showMoreApp = () => {
        this.props.navigation.navigate('Chat');
    };
    _signOutAsync = async () => {
        
    }
}