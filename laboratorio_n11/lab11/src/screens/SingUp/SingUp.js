import React from 'react';
import { View, Button, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-community/async-storage';
import { ForceTouchGestureHandler } from 'react-native-gesture-handler';

export default class SingUpScreen extends React.Component {
    static navigationOptions = {
        title: 'Registrarse',
        tabBarIcon: ({ ForceTouchGestureHandler, horizontal, tintColor }) => {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
        }
    };
    _singInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('App');
    };
    render() {
        return (
            <View>
                <Button title="Inicie Sesion" onPress={this._singInAsync} />
            </View>
        );
    }
}