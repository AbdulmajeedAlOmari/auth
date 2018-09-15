import { 	FB_API_KEY,
			FB_AUTH_DOMAIN,
			FB_DB_URL,
			FB_PROJECT_ID,
			FB_STORAGE_BUCKET,
			FB_MESSAGIN_SENDER_ID } from 'react-native-dotenv';
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {

	componentWillMount() {
		// Initialize Firebase
		const config = {
			apiKey: FB_API_KEY,
			authDomain: FB_AUTH_DOMAIN,
			databaseURL: FB_DB_URL,
			projectId: FB_PROJECT_ID,
			storageBucket: FB_STORAGE_BUCKET,
			messagingSenderId: FB_MESSAGIN_SENDER_ID
		};

		firebase.initializeApp(config);
	}

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				<LoginForm />
			</View>
		);
	}
}
