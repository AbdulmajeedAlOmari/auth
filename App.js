import { 	
			FB_API_KEY,
			FB_AUTH_DOMAIN,
			FB_DB_URL,
			FB_PROJECT_ID,
			FB_STORAGE_BUCKET,
			FB_MESSAGIN_SENDER_ID } from 'react-native-dotenv';
import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner } from './src/components/common';
import LoginForm from './src/components/LoginForm';
import LogoutForm from './src/components/LogoutForm';

export default class App extends Component {
	state = { loggedIn: null };

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

		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				this.setState({ loggedIn: true });
			} else {
				this.setState({ loggedIn: false });
			}
		});
	}

	renderContent() {
		switch (this.state.loggedIn) {
			case true:
				return <LogoutForm onButtonPress={() => firebase.auth().signOut()} />;
			case false:
				return <LoginForm />;
			default:
				return <View style={styles.spinnerContainerStyle}><Spinner /></View>;
		}
	}

	render() {
		return (
			<View style={styles.containerStyle}>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}

const styles = {
	containerStyle: {
		flex: 1,
		height: '100%',
		width: '100%'
	},
	spinnerContainerStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
	}
};
