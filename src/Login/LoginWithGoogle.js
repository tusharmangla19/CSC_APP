import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	TextInput,
	Button,
} from "react-native";
import {
	GoogleSignin,
	GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const LoginWithGoogle = () => {
	const [initializing, setInitializing] = useState(true);
	const [user, setUser] = useState();

	GoogleSignin.configure({
		webClientId:
			"239451298569-epn2j5c06j5gv0qg2dfn6gpoapqmdchg.apps.googleusercontent.com",
	});
	//handle user state changes
	function onAuthStateChanged(user) {
		setUser(user);
		if (initializing) {
			setInitializing(false);
		}
	}
	useEffect(() => {
		const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
		return subscriber;
	}, []);

	async function onGoogleButtonPress() {
		// Check if your device supports Google Play
		await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
		// Get the users ID token
		const { idToken } = await GoogleSignin.signIn();

		// Create a Google credential with the token
		const googleCredential = auth.GoogleAuthProvider.credential(idToken);

		// Sign-in the user with the credential
		// return auth().signInWithCredential(googleCredential);
		const user_sign_in = auth().signInWithCredential(googleCredential);
		user_sign_in
			.then((user) => {
				console.log("userrrrrrrrrrrr", user);
			})
			.catch((error) => {
				console.log("errrrrrrrrrrrrrrr", error);
			});
	}

	const signOut = async () => {
		try {
			await GoogleSignin.revokeAccess();
			await auth().signOut();
		} catch (error) {
			console.error(error);
		}
	};

	if (initializing) {
		return null;
	}
	if (!user) {
		return (
			<View style={styles.container}>
				<GoogleSigninButton
					style={{ width: 300, height: 65, marginTop: 300 }}
					onPress={onGoogleButtonPress}
				></GoogleSigninButton>
			</View>
		);
	}
	return (
		<View>
			<View>
				<Text>Welcome,{user.displayName}</Text>
				<Image
					source={{ uri: user.photoURL }}
					style={{ height: 300, width: 300, margin: 50, borderRadius: 150 }}
				></Image>
				<Button title="Sign Out" onPress={signOut}></Button>
			</View>
		</View>
	);
};

export default LoginWithGoogle;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: " #fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
