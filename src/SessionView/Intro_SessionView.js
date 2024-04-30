import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Intro_SessionView = () => {
	return (
		<View>
			<View style={styles.title}>
				<Text style={styles.titleText}>A is a Healthy Apple</Text>
			</View>
			<View style={styles.details}>
				<Text style={styles.detailsDuration}>Duration - 1 hr</Text>
				<Text style={styles.detailsResources}>
					Resource - AR Markers, AR App, You tube video1
				</Text>
			</View>
		</View>
	);
};

export default Intro_SessionView;

const styles = StyleSheet.create({
	title: {
		marginTop: 50,
		marginBottom: 25,
	},
	titleText: {
		fontFamily: "Poppins",
		fontSize: 48,
		// font-weight: 500;
		lineHeight: 72,
		textAlign: "center",
	},
	details: {
		backgroundColor: "#F1F6FB",
		borderRadius: 42,
		height: 84,
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
		justifyContent: "space-around",
	},
	detailsDuration: {
		fontSize: 28,
	},
	detailsResources: {
		fontSize: 28,
	},
});
