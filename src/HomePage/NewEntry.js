import {
	StyleSheet,
	Text,
	View,
	Image,
	Button,
	TouchableOpacity,
} from "react-native";
import React from "react";

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

const NewEntry = ({ route, navigation }) => {
	return (
		<View style={styles.newEntry}>
			<View style={styles.left}>
				<View style={styles.logoContainer}>
					<Image
						style={styles.cscLogo}
						source={require("../../assets/logo1.png")}
					/>
					<Text style={styles.appName}>
						CSC Bal Vidyalaya Technology-Enabled Learning
					</Text>
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

export default NewEntry;

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
		width: 100,
		height: 50,
	},
	appName: {
		// fontSize: 16,
		width: 250,
	},
	center: {},
	centerText: {
		fontSize: 18,
		fontWeight: "bold",
		position: "relative",
		right: 80,
	},
	right: {
		// No need for flex: 1 since the right view doesn't need to grow
		marginRight: 10,
	},
	logoutText: {
		color: "blue",
		fontSize: 16,
		fontWeight: "bold",
	},
});
