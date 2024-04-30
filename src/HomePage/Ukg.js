import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	Linking,
	TouchableOpacity,
} from "react-native";
import React from "react";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import { useNavigation } from "@react-navigation/native";
import * as Notifications from "expo-notifications";

const lkg = () => {
	const demo = async () => {
		const deviceToken = (await Notifications.getExpoPushTokenAsync()).data;
		const currentUser = firebase.auth().currentUser;
		if (currentUser) {
			const uid = currentUser.uid;
			const url = `am://cscbviitd-alphabet-models?uid=${uid}&deviceToken=${deviceToken}`;
			try {
				await Linking.openURL(url);
			} catch (error) {
				// console.error("Error opening URL:", error);
				await Linking.openURL("https://www.google.com/");
			}
			// Linking.openURL(`app://demo.app?uid=${uid}&deviceToken=${deviceToken}`);
		}
	};
	const arColorMixer = async () => {
		const deviceToken = (await Notifications.getExpoPushTokenAsync()).data;
		const currentUser = firebase.auth().currentUser;
		if (currentUser) {
			const uid = currentUser.uid;
			const url = `arcolors://mixer.app?uid=${uid}&deviceToken=${deviceToken}`;
			try {
				await Linking.openURL(url);
			} catch (error) {
				await Linking.openURL("https://www.google.com/");
			}
		}
	};

	const openApp = async function (link, downloadLink) {
		const deviceToken = (await Notifications.getExpoPushTokenAsync()).data;
		const currentUser = firebase.auth().currentUser;
		if (currentUser) {
			const uid = currentUser.uid;
			const url = `${link}?uid=${uid}&deviceToken=${deviceToken}`;
			try {
				await Linking.openURL(url);
			} catch (error) {
				await Linking.openURL(downloadLink);
			}
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.app}>
				<TouchableOpacity>
					<Image
						style={styles.appImage}
						source={require("../../assets/AV.png")}
						resizeMode="contain"
					/>
					<Text style={styles.appText}>Ar Varnamala</Text>
				</TouchableOpacity>
				<View style={styles.appOperations}>
					<TouchableOpacity
						style={styles.openBtn}
						onPress={() =>
							openApp(
								"am://cscbviitd-ar-alphabet-video",
								"https://drive.google.com/file/d/1SkJ2ALbGtkCfTwSHeTLB2hu3fHor0_MU/view?usp=drive_link"
							)
						}
					>
						<Text style={styles.tt}>Open</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.app}>
				<TouchableOpacity>
					<Image
						style={styles.appImage}
						source={require("../../assets/AB.png")}
						resizeMode="contain"
					/>
					<Text style={styles.appText}>Alphabet</Text>
				</TouchableOpacity>
				<View style={styles.appOperations}>
					<TouchableOpacity
						style={styles.openBtn}
						onPress={() =>
							openApp(
								"abw://cscbviitd-alphabet",
								"https://drive.google.com/file/d/1bBl0NCMu-_p0zxeYRuSvEvMon1roukmo/view?usp=drive_link"
							)
						}
					>
						<Text style={styles.tt}>Open</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default lkg;

const styles = StyleSheet.create({
	container: {
		display: "flex",
		flexDirection: "row",
		// display: "flex",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		flexWrap: "wrap",
	},
	app: {
		width: 200,
		height: 200,
		margin: 30,
		backgroundColor: "white",
		borderRadius: 10,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		gap: 10,
	},
	appImage: {
		width: 80,
		height: 80,
		marginLeft: "auto",
		marginRight: "auto",
		borderRadius: 14,
	},
	appText: {
		fontSize: 17,
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
		marginTop: 10,
	},
	openBtn: {
		color: "white",
		width: 110,
		height: 34,
		borderRadius: 20,
		// textAlign: "center",
		backgroundColor: "#C8171D",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 10,
	},
	tt: {
		color: "white",
		textAlign: "center",
	},
});
