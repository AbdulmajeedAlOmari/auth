import React from 'react';
import { Card, CardSection, Button } from './common';

const LogoutForm = ({ onButtonPress }) => {
	return (
		<Card>
			<CardSection>
				<Button onPress={onButtonPress}>Logout</Button>
			</CardSection>
		</Card>
	);
};

export default LogoutForm;
