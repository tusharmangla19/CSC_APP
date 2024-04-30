import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Image,
	TextInput,
	Button,
} from "react-native";
import React from "react";
import HomeTeacher_Navbar from "./HomeTeacherNavbar";
// import HomeTeacher_Sidebar from "../Sidebar";
// import HomeTeacher_Content from "./HomeTeacherContent";
import { ScrollView } from "react-native";
import HomeTeacherClasses from "./HomeTeacherClasses";

export default function HomeTeacher() {
	return (
		<ScrollView>
			<View>
				<HomeTeacher_Navbar></HomeTeacher_Navbar>
				<HomeTeacherClasses></HomeTeacherClasses>
			</View>
		</ScrollView>
	);
}
