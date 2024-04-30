import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Body_SessionView = () => {
	return (
		<View style={styles.body}>
			<View style={styles.instructionBox}>
				<Text style={styles.instruction}>Instructions</Text>
				<Text style={styles.instructions}>
					Tell the story interactively and conduct activities related to the
					story
				</Text>
			</View>

			<View style={styles.contentBox}>
				<Text style={styles.contentHead}>Content</Text>
				<Text style={styles.content}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit animi
					fugit sint adipisci magnam, voluptas necessitatibus eligendi dolorum
					totam ratione nulla natus reiciendis odit culpa eius ea deserunt
					ducimus cum?
				</Text>
			</View>
		</View>
	);
};

export default Body_SessionView;

const styles = StyleSheet.create({
	body: {
		marginTop: 80,
		width: "80%",
		marginLeft: "auto",
		marginRight: "auto",
	},
	instruction: {
		fontSize: 28,
		fontWeight: "bold",
	},
	instructions: {
		fontSize: 28,
		// fontWeight: "bold",
	},
	contentBox: {
		marginTop: 40,
	},
	contentHead: {
		fontSize: 28,
		fontWeight: "bold",
	},
	content: {
		fontSize: 28,
	},
});
