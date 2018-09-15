import React, { Component } from 'react';
import { TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

export default class login extends Component {
	state = { text: '' };

	render() {
		return (
			<Card>
				<CardSection>
					<TextInput
						value={this.state.text}
						onChange={text => this.setState({ text })}
						style={{ height: 20, width: 100 }}
					/>
				</CardSection>

				<CardSection>
					<TextInput style={{ height: 20, width: 100 }} />
				</CardSection>

				<CardSection>
					<Button>Login</Button>
				</CardSection>
			</Card>
		);
	}
}
