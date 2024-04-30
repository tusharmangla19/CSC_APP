// import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
// import { Button, Linking } from "react-native";

// import React from "react";
// import auth from "@react-native-firebase/auth";
// import firestore from "@react-native-firebase/firestore";
// import firebase from "@react-native-firebase/app";
// import { useNavigation } from "@react-navigation/native";
// import * as Application from "expo-application";

// const HomeTeacherNavbar = ({ route }) => {
// 	const navigation = useNavigation();
// 	const currentUser = firebase.auth().currentUser;
// 	const logout = async function () {
// 		try {
// 			if (currentUser) {
// 				const uid = currentUser.uid;
// 				const userDoc = await firestore().collection("users").doc(uid).get();
// 				console.log(userDoc, "UD");
// 				if (userDoc.exists) {
// 					const storedDeviceId = userDoc._data.deviceId;
// 					console.log(storedDeviceId, "iddddddddddd");
// 					// console.log(userDoc._data.deviceToken);
// 					const currentDeviceId = Application.getAndroidId();
// 					if (currentDeviceId === storedDeviceId) {
// 						await firestore()
// 							.collection("users")
// 							.doc(uid)
// 							.update({ deviceId: firebase.firestore.FieldValue.delete() });
// 						await auth().signOut();
// 						navigation.navigate("NewLogin");
// 						console.log("User logged out successfully");
// 					}
// 				}
// 			} else {
// 				console.log("No user is currently signed in");
// 			}
// 		} catch (error) {
// 			console.log("Error logging out:", error);
// 		}
// 	};

// 	return (
// 		<View style={styles.homeTeacher}>
// 			<View style={styles.btn}>
// 				<Button
// 					title={"Logout"}
// 					onPress={logout}
// 					style={styles.logout}
// 				></Button>
// 			</View>

// 			<View style={styles.appStore}>
// 				<Text style={styles.title}>App Store</Text>
// 			</View>
// 			<View style={styles.box}>
// 				<Image
// 					style={styles.cscLogo}
// 					source={require("../../assets/logo1.png")}
// 				></Image>
// 				<Text style={styles.boxText}>
// 					CSC Bal Vidyalaya Technology-Enabled Learning
// 				</Text>
// 			</View>
// 			<View></View>
// 		</View>
// 	);
// };

// const styles = StyleSheet.create({
// 	btn: {
// 		width: 80,
// 		marginLeft: "auto",
// 		marginRight: 30,
// 		marginTop: 15,
// 		borderRadius: 10,
// 	},
// 	logout: {
// 		borderRadius: 8,
// 	},
// 	appStore: {
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		margin: 50,
// 		fontSize: 30,
// 	},
// 	title: {
// 		fontSize: 30,
// 		fontWeight: "bold",
// 	},
// 	box: {
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "center",
// 	},
// 	boxText: {
// 		color: "#0E61B0",
// 		fontFamily: "roboto",
// 		marginTop: 15,
// 		fontSize: 25,
// 		fontWeight: "bold",
// 	},
// 	cscLogo: {
// 		width: 327,
// 		height: 165,
// 	},
// });

// export default HomeTeacherNavbar;

import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TouchableOpacity,
} from "react-native";
import React from "react";

import auth from "@react-native-firebase/auth";
import firestore from "@react-native-firebase/firestore";
import firebase from "@react-native-firebase/app";
import { useNavigation } from "@react-navigation/native";
import * as Application from "expo-application";

const HomeTeacherNavbar = ({ route }) => {
	const navigation = useNavigation();
	const currentUser = firebase.auth().currentUser;
	const logout = async function () {
		try {
			if (currentUser) {
				const uid = currentUser.uid;
				const userDoc = await firestore().collection("users").doc(uid).get();
				console.log(userDoc, "UD");
				if (userDoc.exists) {
					const storedDeviceId = userDoc._data.deviceId;
					console.log(storedDeviceId, "iddddddddddd");
					const currentDeviceId = Application.getAndroidId();
					if (currentDeviceId === storedDeviceId) {
						await firestore()
							.collection("users")
							.doc(uid)
							.update({ deviceId: firebase.firestore.FieldValue.delete() });
						await auth().signOut();
						navigation.navigate("NewLogin");
						console.log("User logged out successfully");
					}
				}
			} else {
				console.log("No user is currently signed in");
			}
		} catch (error) {
			console.log("Error logging out:", error);
		}
	};

	return (
		<View style={styles.newEntry}>
			<View style={styles.left}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.cscLogo}
						source={require("../../assets/logo1.png")}
					/>
					<Text style={styles.appName}>CSC Technology-Enabled Learning</Text>
				</View>
			</View>
			<View style={styles.center}>
				<Text style={styles.centerText}>APP STORE</Text>
			</View>
			<View style={styles.right}>
				<TouchableOpacity onPress={logout}>
					<Text style={styles.logoutText}>LOGOUT</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default HomeTeacherNavbar;

const styles = StyleSheet.create({
	newEntry: {
		flexDirection: "row", // Align children horizontally
		justifyContent: "space-between", // Distribute children evenly along the main axis
		alignItems: "center", // Center children along the cross axis
		padding: 16,
	},
	left: {},
	logoContainer: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	cscLogo: {
		width: 175,
		height: 88,
	},
	appName: {
		fontSize: 19,
		fontWeight: "bold",
		width: 280,
		textAlign: "center",
		marginTop: 6,
	},
	centerText: {
		fontSize: 40,
		fontWeight: "bold",
		position: "relative",
		right: 55,
		textAlign: "center",
	},
	right: {
		marginRight: 10,
		backgroundColor: "#B9291E",
		// padding: "30,90",
		paddingHorizontal: 25,
		paddingVertical: 13,
		borderRadius: 10,
	},
	logoutText: {
		color: "white",
		fontSize: 16,
		fontWeight: "bold",
	},
});
