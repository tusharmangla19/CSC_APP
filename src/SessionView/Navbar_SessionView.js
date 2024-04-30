import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Navbar_SessionView = () => {
	return (
		<View style={styles.navbar}>
			<Text style={styles.navbarText}>24 Jan, Session 1</Text>
		</View>
	);
};

export default Navbar_SessionView;

const styles = StyleSheet.create({
	navbar: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#FFF6D6",
		width: "100%",
		height: "20%",
	},
	navbarText: {
		// fontWeight: "bold",
		fontSize: 24,
	},
});
