// import { StyleSheet, Text, View, Image } from "react-native";
// import React from "react";
// import HomeTeacherContent from "./HomeTeacherContent";

// const HomeTeacherClasses = () => {
// 	const nurseryApps = function () {};
// 	const lkgApps = function () {};
// 	const ukgApps = function () {};
// 	return (
// 		<View>
// 			<View style={styles.classBox}>
// 				<View style={styles.classBoxImage}>
// 					<Image
// 						onPress={nurseryApps}
// 						style={styles.active}
// 						source={require("../assets/Group8.png")}
// 					></Image>
// 					<Image
// 						style={styles.classImg}
// 						source={require("../assets/FoodCard.png")}
// 					></Image>
// 					<Image
// 						style={styles.classImg}
// 						source={require("../assets/FoodCard2.png")}
// 					></Image>
// 				</View>
// 			</View>
// 		</View>
// 	);
// };

// export default HomeTeacherClasses;

// const styles = StyleSheet.create({
// 	a: {
// 		display: "flex",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		flexDirection: "row",
// 		flexWrap: "wrap",
// 	},
// 	classBoxImage: {
// 		display: "flex",
// 		flexDirection: "row",
// 		justifyContent: "center",
// 		alignItems: "center",
// 		marginTop: 30,
// 		gap: 80,
// 	},
// 	classImg: {
// 		borderRadius: 5,
// 	},
// 	active: {
// 		borderRadius: 5,
// 		backgroundColor: "#AA8CFF",
// 	},
// });

import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import HomeTeacherContent from "./HomeTeacherContent";
import Lkg from "./Lkg";
import Ukg from "./Ukg";

const HomeTeacherClasses = () => {
	const [activeClass, setActiveClass] = useState("nursery");

	const handleClassPress = (className) => {
		setActiveClass(className);
	};

	return (
		<View>
			<View style={styles.classBox}>
				<View style={styles.classBoxImage}>
					<TouchableOpacity onPress={() => handleClassPress("nursery")}>
						<Image
							style={[
								styles.classImg,
								activeClass === "nursery" && styles.active,
							]}
							source={require("../../assets/Group8.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleClassPress("lkg")}>
						<Image
							style={[styles.classImg, activeClass === "lkg" && styles.active]}
							source={require("../../assets/FoodCard.png")}
						/>
					</TouchableOpacity>
					<TouchableOpacity onPress={() => handleClassPress("ukg")}>
						<Image
							style={[styles.classImg, activeClass === "ukg" && styles.active]}
							source={require("../../assets/FoodCard2.png")}
						/>
					</TouchableOpacity>
				</View>
			</View>

			{/* Render content based on active class */}
			{activeClass === "nursery" && <HomeTeacherContent class="Nursery" />}
			{activeClass === "lkg" && <Lkg class="LKG"></Lkg>}
			{activeClass === "ukg" && <Ukg class="UKG" />}
		</View>
	);
};

export default HomeTeacherClasses;

const styles = StyleSheet.create({
	classBoxImage: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 25,
		gap: 80,
	},
	classImg: {
		borderRadius: 5,
	},
	active: {
		borderRadius: 5,
		backgroundColor: "#AA8CFF",
	},
});
