import React from 'react';
import { View, Text } from 'react-native';

const Alert = ({ color, children }) => {
	const { containerStyle, textStyle } = styles;

	if (color) {
		containerStyle.borderColor = color;
		textStyle.color = color;
	}

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
		borderColor: '#000',
		margin: 5,
	},
	textStyle: {
		fontSize: 18,
		color: '#000',
		paddingTop: 10,
		paddingBottom: 10,
		paddingRight: 5,
		paddingLeft: 5
	}
};

export { Alert };
