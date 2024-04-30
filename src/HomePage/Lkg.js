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
						source={require("../../assets/HV.png")}
						resizeMode="contain"
					/>
					<Text style={styles.appText}>Hindi Varnmala</Text>
				</TouchableOpacity>
				<View style={styles.appOperations}>
					<TouchableOpacity
						style={styles.openBtn}
						onPress={() =>
							openApp(
								"hvm://cscbviitd-hindi-alphabet-models",
								"https://drive.google.com/file/d/1Afh_rnwE75lamzIz7fl2uGj-Z1YCvTLz/view?usp=drive_link"
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
						source={require("../../assets/AV.png")}
						resizeMode="contain"
					/>
					<Text style={styles.appText}>AR Alphabet Video</Text>
				</TouchableOpacity>
				<View style={styles.appOperations}>
					<TouchableOpacity
						style={styles.openBtn}
						onPress={() =>
							openApp(
								"arav://cscbviitd-alphabet-video",
								"https://drive.google.com/file/d/1PAvzk8DvnW3m-6OMyCWbxapzJODpE74Y/view?usp=drive_link"
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
