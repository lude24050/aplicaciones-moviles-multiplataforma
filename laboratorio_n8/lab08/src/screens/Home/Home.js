import React from 'react';
import { View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Bienvenido a la App!',
        tabBarIcon: ({ ForceTouchGestureHandler, horizontal, tintColor }) => {
            return <Ionicons name="ios-clipboard" size={25} color={tintColor} />;
        }
    };
    _showMoreApp = () => {
        this.props.navigation.navigate('Chat');
    };
    _singInAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
    render() {
        return (
            <View>
                <Button title="Muestreme el chat" onPress={this._showMoreApp} />
                <Button title="Mejor, Cierra la sesion :) " onPress={this._singOutAsync} />
            </View>
        );
    }
}