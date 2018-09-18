import React from 'react';
import { View, Text } from 'react-native';

const Alert = ({ children }) => {
	const { containerStyle, textStyle } = styles;

	return (
		<View style={containerStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</View>
	);
};

const styles = {
	containerStyle: {
		alignSelf: 'center',
		backgroundColor: '#fff',
		borderWidth: 2,
		borderRadius: 5,
		borderColor: 'red',
		margin: 5,
	},
	textStyle: {
		fontSize: 18,
		color: 'red',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 5,
		paddingLeft: 5
	}
};

export { Alert };
