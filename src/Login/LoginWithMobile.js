import React, { useState } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	TextInput,
	ScrollView,
} from "react-native";

import auth from "@react-native-firebase/auth";
import { useNavigation } from "@react-navigation/native";

import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

const LoginWithMobile = ({ navigation }) => {
	const [phoneNumber, setPhoneNumber] = useState();
	// const navigation = useNavigation();

	const signInWithPhoneNumber = async () => {
		try {
			const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
			navigation.navigate("VerifyOTP", { confirmation, phoneNumber }); // Pass phoneNumber to VerifyOTP
		} catch (error) {
			console.log("Error sending code: ", error);
		}
	};
	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					// source={require(".../assets/login.jpg")}
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
						<TouchableOpacity style={styles.loginOperations}>
							<TextInput
								style={styles.input}
								placeholder="Enter your phone number"
								value={phoneNumber}
								onChangeText={setPhoneNumber}
							/>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={signInWithPhoneNumber}
							style={styles.button}
						>
							<Text style={styles.buttonText}>Get OTP</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: "relative",
	},
	backgroundImage: {
		flex: 1,
		// objectFit: "cover",
		height: vh(100),
		width: vw(100),
		// resizeMode: "stretch",
		// height: "100vh",
		// resizeMode: "cover",
		// height: "100%",
		// width: "100%",
		// backgroundRepeat: "noRepeat",
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
	// loginOperations: {
	// 	margin: 10,
	// 	borderRadius: 10,
	// 	width: 368,
	// 	height: 88,
	// 	backgroundColor: "white",
	// 	display: "flex",
	// 	justifyContent: "center",
	// 	alignItems: "center",
	// },
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
	input: {
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
		position: "relative",
		top: "65px",
	},
});
export default LoginWithMobile;

// import React, { useState } from "react";
// import {
// 	View,
// 	Text,
// 	TouchableOpacity,
// 	StyleSheet,
// 	Image,
// 	TextInput,
// } from "react-native";

// import auth from "@react-native-firebase/auth";
// import { useNavigation } from "@react-navigation/native";

// const LoginWithMobile = () => {
// 	const [phoneNumber, setPhoneNumber] = useState();
// 	const navigation = useNavigation();

// 	const signInWithPhoneNumber = async () => {
// 		try {
// 			const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
// 			navigation.navigate("VerifyOTP", { confirmation, phoneNumber }); // Pass phoneNumber to VerifyOTP
// 		} catch (error) {
// 			console.log("Error sending code: ", error);
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
// 						style={styles.input}
// 						placeholder="Enter your phone number"
// 						value={phoneNumber}
// 						onChangeText={setPhoneNumber}
// 					/>
// 					<Text style={styles.edu}>Sign in</Text>
// 					<TouchableOpacity
// 						onPress={signInWithPhoneNumber}
// 						style={styles.button}
// 					>
// 						<Text style={styles.buttonText}>Get OTP</Text>
// 					</TouchableOpacity>
// 				</View>
// 			</View>
// 		</View>
// 	);
// };

// export default LoginWithMobile;

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
// });
