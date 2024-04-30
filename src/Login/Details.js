import React, { useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Button,
	ScrollView,
	Image,
} from "react-native";
import firestore from "@react-native-firebase/firestore";
import * as Application from "expo-application";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

export default function Details({ route, navigation }) {
	const [name, setName] = useState("");
	const [dob, setDob] = useState("");
	const [gender, setGender] = useState("");

	const saveUserData = async () => {
		try {
			const deviceId = Application.getAndroidId();
			const { uid, phoneNumber } = route.params; // Get uid and phoneNumber from route params
			const userRef = firestore().collection("users").doc(uid);
			const data = { name, dob, gender, phoneNumber }; // Also save phoneNumber
			// Retrieve the device token

			data.deviceId = deviceId;

			await userRef.set(data, { merge: true });
			// await auth().signOut(); // Sign out to invalidate the session on this device
			navigation.navigate("App Store");
		} catch (error) {
			console.log("Error saving user data:", error);
		}
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={require("../../assets/login.jpg")}
					style={styles.backgroundImage}
				/>
				{/* <BlurView></BlurView> */}
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
					<View style={styles.details}>
						<Text style={styles.detailsText}>Enter Your Details:</Text>
						<TextInput
							style={styles.input}
							placeholder="Name"
							value={name}
							onChangeText={setName}
						/>
						<TextInput
							style={styles.input}
							placeholder="Date of Birth (DD/MM/YYYY)"
							value={dob}
							onChangeText={setDob}
						/>
						<TextInput
							style={styles.input}
							placeholder="Gender"
							value={gender}
							onChangeText={setGender}
						/>
						<View style={styles.saveButton}>
							<Button
								title={"Save"}
								onPress={saveUserData}
								style={styles.save}
							></Button>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	cscLogo: {
		width: 327,
		height: 165,
	},
	container: {
		flex: 1,
		position: "relative",
	},
	backgroundImage: {
		flex: 1,
		// objectFit: "cover",
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
	login: {
		marginTop: 250,
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
	details: {
		display: "flex",
		justifyContent: "center",
		position: "absolute",
		gap: 15,
		top: 290,
	},
	detailsText: {
		fontWeight: "bold",
		fontSize: 22,
	},
	input: {
		fontSize: 18,
		// borderWidth: 1,
		// borderRadius: 5,
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		// borderColor: "#20232a",
	},
	saveButton: {
		marginTop: 4,
		width: "80%",
		display: "flex",
		// justifyContent: "center",
		marginRight: "auto",
		marginLeft: "auto",
	},
});

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		backgroundColor: "#F5F5F5",
// 	},
// 	heading: {
// 		fontSize: 24,
// 		fontWeight: "bold",
// 		marginBottom: 20,
// 	},
// 	inputContainer: {
// 		width: "80%",
// 		backgroundColor: "#FFFFFF",
// 		borderRadius: 10,
// 		padding: 20,
// 		shadowColor: "#000",
// 		shadowOffset: {
// 			width: 0,
// 			height: 2,
// 		},
// 		shadowOpacity: 0.25,
// 		shadowRadius: 3.84,
// 		elevation: 5,
// 	},
// 	input: {
// 		height: 40,
// 		borderColor: "#CCCCCC",
// 		borderWidth: 1,
// 		borderRadius: 5,
// 		paddingHorizontal: 10,
// 		marginBottom: 10,
// 	},
// 	saveButton: {
// 		backgroundColor: "#841584",
// 		paddingVertical: 15,
// 		paddingHorizontal: 30,
// 		borderRadius: 25,
// 		marginTop: 20,
// 	},
// 	saveButtonText: {
// 		color: "#FFFFFF",
// 		fontWeight: "bold",
// 		fontSize: 16,
// 	},
// });
