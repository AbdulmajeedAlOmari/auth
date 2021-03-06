import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner, Alert } from './common';

export default class login extends Component {
	state = { email: '', password: '', error: '', loading: false };

	onButtonPress() {
		const { email, password } = this.state;

		// to reset error message and start spinning
		this.setState({ error: '', loading: true }); 

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onLoginSuccess.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onLoginSuccess.bind(this))
					.catch(this.onLoginFail.bind(this));
			});
	}

	onLoginSuccess() {
		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		});
	}

	onLoginFail() {
		this.setState({
			error: 'Authentication failed',
			loading: false
		});
	}

	renderButton() {
		if (this.state.loading) {
			return (
				<Spinner size='small' />
			);
		}

		return (
			<Button onPress={this.onButtonPress.bind(this)}>
				Login
			</Button>
		);
	}

	renderError() {
		if (this.state.error) {
			return	(
						<Alert>
							{this.state.error}
						</Alert>
					);
		}
	}

	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="john@email.com"
						label="Email"
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
					<Input
						secureTextEntry
						placeholder="password"
						label="Password"
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
					/>
				</CardSection>

				{this.renderError()}

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}
