import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View style={styles.container}>
			<View style={styles.left}>
				<Image source={require("../assets/image.png")} resizeMode="contain" />
				<Text style={styles.imageText}>Plan. Teach. Succeed</Text>
			</View>
			<View style={styles.right}>
				<View style={styles.rightViewContainer}>
					<Text style={styles.edu}>Welcome Educators!</Text>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("NumberLogin")} // Navigate to LoginwithMobile screen
					>
						<Text style={styles.buttonText}>Sign In with Mobile Number</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={styles.button}
						onPress={() => navigation.navigate("GoogleLogin")} // Navigate to GoogleLogin screen
					>
						<Text style={styles.buttonText}>Sign In with Google</Text>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	);
};

export default HomeScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "row", // Arrange children horizontally
		justifyContent: "space-between", // Distribute children along the main axis (horizontally)
		alignItems: "center", // Center children along the cross axis (vertically)
		paddingHorizontal: 20, // Add some horizontal padding for the content
	},
	left: {
		flex: 1, // Occupy 50% of the container's width
		alignItems: "center", // Center children horizontally
	},
	right: {
		flex: 1, // Occupy 50% of the container's width
		alignItems: "center", // Center children horizontally
		backgroundColor: "#FFF6D6",
		width: "100%",
		height: "100%",
		justifyContent: "center",
	},
	imageText: {
		fontSize: 18,
		marginBottom: 10,
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
	buttonText: {
		color: "black",
		textAlign: "center",
		fontFamily: "Inter",
		fontSize: 16,
	},
	edu: {
		position: "relative",
		bottom: "140px",
		fontFamily: "Inter",
		fontSize: 64,
		fontWeight: "600",
		color: "#6585A5",
		// textShadow:
		// 	"0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25)",
	},
	rightViewContainer: {
		width: "449px",
	},
});
