import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "expo-dev-client";
import HomeScreen from "./src/HomeScreen";
import LoginWithGoogle from "./src/Login/LoginWithGoogle";
import LoginWithMobile from "./src/Login/LoginWithMobile";
import Details from "./src/Login/Details";
import HomeTeacher from "./src/HomePage/HomeTeacher";
import VerifyOTP from "./src/Login/VerifyOTP";
import SessionView from "./src/SessionView/SessionView";
import NewLogin from "./src/Login/NewLogin";
// import NewEntry from "./src/NewEntry";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{/* <Stack.Screen name="NewLogin" component={NewLogin} /> */}
				{/* <Stack.Screen name="Login" component={HomeScreen} /> */}
				{/* <Stack.Screen name="NumberLogin" component={LoginWithMobile} /> */}
				{/* <Stack.Screen name="GoogleLogin" component={LoginWithGoogle} /> */}
				{/* <Stack.Screen name="Details" component={Details} /> */}
				{/* <Stack.Screen name="VerifyOTP" component={VerifyOTP} /> */}
				<Stack.Screen name="App Store" component={HomeTeacher} />
				{/* <Stack.Screen name="SessionView" component={SessionView} /> */}
				{/* <Stack.Screen name="NewEntry" component={NewEntry} /> */}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
