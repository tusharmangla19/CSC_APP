import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Navbar from "./Navbar_SessionView";
import Intro_SessionView from "./Intro_SessionView";
import Body_SessionView from "./Body_SessionView";

const SessionView = () => {
	return (
		<View>
			<Navbar></Navbar>
			<Intro_SessionView></Intro_SessionView>
			<Body_SessionView></Body_SessionView>
		</View>
	);
};

export default SessionView;

const styles = StyleSheet.create({});
