import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	TextInput,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";
import firebase from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";
import { useNavigation } from "@react-navigation/native";

import * as Application from "expo-application";

const VerifyOTP = ({ route }) => {
	const deviceId = Application.getAndroidId();
	const [code, setCode] = useState("");
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigation = useNavigation();

	const confirmCode = async () => {
		try {
			const { confirmation, phoneNumber } = route.params;
			if (confirmation) {
				const userCredential = await confirmation.confirm(code);
				const user = userCredential.user;

				// Retrieve the device token
				const currentDeviceId = Application.getAndroidId();
				// Check if the user exists in the database
				const userDocument = await firestore()
					.collection("users")
					.doc(user.uid)
					.get();

				if (userDocument.exists) {
					// User exists, retrieve the stored device token
					const storedDeviceId = userDocument.data().deviceId;

					if (currentDeviceId === storedDeviceId) {
						console.log("Existing user with same device");
						// Allow login, both device tokens match
						navigation.navigate("App Store");
					} else if (!storedDeviceId) {
						console.log("phle user aaya tha pr usne logout krdia");
						await firestore()
							.collection("users")
							.doc(user.uid)
							.update({ deviceId: currentDeviceId });
						navigation.navigate("App Store");
					} else {
						setIsLoggedIn(true);
						console.log("get lost");
					}
				} else {
					// User is new, navigate to details
					navigation.navigate("Details", { uid: user.uid, phoneNumber });
				}
			} else {
				console.log("Confirmation object is null");
			}
		} catch (error) {
			console.log("Invalid code", error);
		}
	};

	return (
		<View style={styles.container}>
			<Image
				source={require("../../assets/login.jpg")}
				style={styles.backgroundImage}
			/>
			<View style={styles.pannel}>
				<View style={styles.logo}>
					<View>
						<Image
							style={styles.cscLogo}
							source={require("../../assets/logo1.png")}
						/>
					</View>
					<View>
						<Text style={styles.text}>CSC Technology Enabled Learning</Text>
					</View>
				</View>

				<View style={styles.login}>
					<TextInput
						style={styles.OTP_input}
						placeholder="Enter OTP"
						keyboardType="numeric"
						value={code}
						onChangeText={setCode}
						styles={styles.textInput}
					/>
					<TouchableOpacity onPress={confirmCode} style={styles.button}>
						<Text style={styles.buttonText}>Verify OTP</Text>
					</TouchableOpacity>
					{isLoggedIn && (
						<Text style={styles.alredyLoggedIn}>User already logged in</Text>
					)}
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	backgroundImage: {
		flex: 1,
		height: vh(100),
		width: vw(100),
	},
	pannel: {
		height: 542,
		width: 665,
		position: "absolute",
		top: 40, // Position it from the top
		right: 60, // Position it from the right
		backgroundColor: "rgba(255, 255, 255, 0.8)", // Add a semi-transparent white background
		display: "flex",
		alignItems: "center",
		borderRadius: 25,
		backgroundColor:
			"linear-gradient(93.85deg, rgba(255,255,255, 0.86), transparent)",
	},
	text: {
		color: "#11175D",
		fontWeight: "bold",
		fontSize: 22,
		marginTop: 10,
	},
	logo: {
		position: "absolute",
		top: 50,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	cscLogo: {
		width: 327,
		height: 165,
	},
	login: {
		marginTop: 290,
	},
	loginOperations: {
		margin: 10,
		borderRadius: 10,
		width: 368,
		height: 88,
		backgroundColor: "white",
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	buttonText: {
		color: "black",
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: 16,
	},
	button: {
		backgroundColor: "white",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 10,
		width: 449,
		height: 66,
		borderRadius: 8,
		display: "flex",
		justifyContent: "center",
	},
	textInput: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
	},
	OTP_input: {
		backgroundColor: "white",
		paddingVertical: 15,
		paddingHorizontal: 20,
		borderRadius: 5,
		marginBottom: 10,
		width: 449,
		height: 66,
		borderRadius: 8,
	},
});
export default VerifyOTP;

///////
/////////////////////////////////
////////////////////////////////
///////// OLD VERSION
// import React, { useState } from "react";
// import {
// 	View,
// 	Text,
// 	TouchableOpacity,
// 	StyleSheet,
// 	Image,
// 	TextInput,
// } from "react-native";
// import firebase from "@react-native-firebase/app";
// import firestore from "@react-native-firebase/firestore";
// import { useNavigation } from "@react-navigation/native";
// import * as Notifications from "expo-notifications";
// import auth from "@react-native-firebase/auth";
// const VerifyOTP = ({ route }) => {
// 	const [code, setCode] = useState("");
// 	const [isLoggedIn, setIsLoggedIn] = useState(false);
// 	const navigation = useNavigation();

// 	const confirmCode = async () => {
// 		try {
// 			const { confirmation, phoneNumber } = route.params;
// 			if (confirmation) {
// 				const userCredential = await confirmation.confirm(code);
// 				const user = userCredential.user;

// 				// Retrieve the device token
// 				const currentDeviceToken = (await Notifications.getExpoPushTokenAsync())
// 					.data;

// 				// Check if the user exists in the database
// 				const userDocument = await firestore()
// 					.collection("users")
// 					.doc(user.uid)
// 					.get();

// 				if (userDocument.exists) {
// 					// User exists, retrieve the stored device token
// 					const storedDeviceToken = userDocument.data().deviceToken;

// 					if (currentDeviceToken === storedDeviceToken) {
// 						console.log("Existing user with same device");
// 						// Allow login, both device tokens match
// 						navigation.navigate("App Store");
// 					} else if (!storedDeviceToken) {
// 						console.log("phle user aaya tha pr usne logout krdia");
// 						await firestore()
// 							.collection("users")
// 							.doc(user.uid)
// 							.update({ deviceToken: currentDeviceToken });
// 						navigation.navigate("App Store");
// 					} else {
// 						setIsLoggedIn(true);
// 						console.log("get lost");
// 					}
// 				} else {
// 					// User is new, navigate to details
// 					navigation.navigate("Details", { uid: user.uid, phoneNumber });
// 				}
// 			} else {
// 				console.log("Confirmation object is null");
// 			}
// 		} catch (error) {
// 			console.log("Invalid code", error);
// 		}
// 	};

// 	return (
// 		<View style={styles.container}>
// 			<View style={styles.left}>
// 				<Image source={require("../assets/image.png")} resizeMode="contain" />
// 				<Text style={styles.imageText}>Plan. Teach. Succeed</Text>
// 			</View>
// 			<View style={styles.right}>
// 				<View style={styles.rightViewContainer}>
// 					<TextInput
// 						style={styles.OTP_input}
// 						placeholder="Enter OTP"
// 						keyboardType="numeric"
// 						value={code}
// 						onChangeText={setCode}
// 					/>
// 					<TouchableOpacity onPress={confirmCode} style={styles.button}>
// 						<Text style={styles.buttonText}>Verify OTP</Text>
// 					</TouchableOpacity>
// 					{isLoggedIn && (
// 						<Text style={styles.alredyLoggedIn}>User already logged in</Text>
// 					)}
// 				</View>
// 			</View>
// 		</View>
// 	);
// };

// export default VerifyOTP;

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		flexDirection: "row", // Arrange children horizontally
// 		justifyContent: "space-between", // Distribute children along the main axis (horizontally)
// 		alignItems: "center", // Center children along the cross axis (vertically)
// 		paddingHorizontal: 20, // Add some horizontal padding for the content
// 	},
// 	left: {
// 		flex: 1, // Occupy 50% of the container's width
// 		alignItems: "center", // Center children horizontally
// 	},
// 	right: {
// 		flex: 1, // Occupy 50% of the container's width
// 		alignItems: "center", // Center children horizontally
// 		backgroundColor: "#FFF6D6",
// 		width: "100%",
// 		height: "100%",
// 		justifyContent: "center",
// 	},
// 	imageText: {
// 		fontSize: 18,
// 		marginBottom: 10,
// 	},
// 	input: {
// 		backgroundColor: "white",
// 		paddingVertical: 15,
// 		paddingHorizontal: 20,
// 		borderRadius: 5,
// 		marginBottom: 10,
// 		width: 449,
// 		height: 66,
// 		borderRadius: 8,
// 		display: "flex",
// 		justifyContent: "center",
// 		position: "relative",
// 		top: "65px",
// 	},
// 	button: {
// 		backgroundColor: "white",
// 		paddingVertical: 15,
// 		paddingHorizontal: 20,
// 		borderRadius: 5,
// 		marginBottom: 10,
// 		width: 449,
// 		height: 66,
// 		borderRadius: 8,
// 		display: "flex",
// 		justifyContent: "center",
// 	},
// 	buttonText: {
// 		color: "black",
// 		textAlign: "center",
// 		fontFamily: "Inter",
// 		fontSize: 16,
// 	},
// 	edu: {
// 		position: "relative",
// 		bottom: "140px",
// 		fontFamily: "Inter",
// 		fontSize: 20,
// 		// fontWeight: 600,
// 		color: "#6585A5",
// 	},
// 	rightViewContainer: {
// 		width: "449px",
// 	},
// 	OTP_input: {
// 		backgroundColor: "white",
// 		paddingVertical: 15,
// 		paddingHorizontal: 20,
// 		borderRadius: 5,
// 		marginBottom: 10,
// 		width: 449,
// 		height: 66,
// 		borderRadius: 8,
// 	},
// 	alredyLoggedIn: {
// 		color: "red",
// 		textAlign: "center",
// 		fontSize: 20,
// 	},
// });
