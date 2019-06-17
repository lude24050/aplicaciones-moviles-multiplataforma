import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Badge = props => {
	return (
		<View style={StyleSheet.container}>
			<Image style={styles.image} source={{ uri: props.avatar }} />
			<Text style={styles.name}>{props.userName}</Text>
			<Text style={styles.handler}>{props.email}</Text>
		</View>
	);
};
var styles = StyleSheet.create({
	container: {
		backgroundColor: '#48BBEC',
		paddingBottom: 10
	},
	name: {
		alignSelf: 'center',
		fontSize: 21,
		marginTop: 10,
		marginBottom: 5,
		color: 'white'
	},
	handler: {
		alignSelf: 'center',
		fontSize: 16,
		color: 'white'
	},
	image: {
		height: 125,
		width: 125,
		borderRadius: 65,
		marginTop: 10,
		alignSelf: 'center'
	}
});

export default Badge;
