import React from "react";
import {
	StyleSheet,
	View,
	Image,
	TextInput,
	TouchableOpacity,
	Text,
	ScrollView,
} from "react-native";
import { vw, vh, vmin, vmax } from "react-native-expo-viewport-units";

import LinearGradient from "react-native-linear-gradient";
import BlurView from "react-native-blur";

const NewLogin = ({ navigation }) => {
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

					<View style={styles.login}>
						<TouchableOpacity
							style={styles.loginOperations}
							onPress={() => navigation.navigate("NumberLogin")}
						>
							<Text>Sign in with Mobile</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={styles.loginOperations}
							// onPress={() => navigation.navigate("GoogleLogin")}
						>
							<Text>Sign in with Google</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</ScrollView>
	);
};

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
});
export default NewLogin;
