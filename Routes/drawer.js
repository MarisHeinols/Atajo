import React from "react";
import { StyleSheet, Image, View,Text } from "react-native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";




import HomeStack from "./homeStack";
import aboutStack from "./aboutStack";
import acountStack from "../Routes/accountStack";
import friendsStack from "../Routes/friendsStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName="Home">
    <Screen name="Home" component={HomeStack} />
    <Screen name="Account" component={acountStack} />
    <Screen name="Friends" component={friendsStack} />
    <Screen name="About" component={aboutStack} />
  </Navigator>
);



export const AppNavigator = () => (
  <NavigationContainer>
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
