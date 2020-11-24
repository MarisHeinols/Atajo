import React, { useState } from "react";
import { createDrawerNavigator} from "@react-navigation/drawer";
import { NavigationContainer,DefaultTheme,DarkTheme } from "@react-navigation/native";
import DrawerContent from '../shared/drawerContent';




import HomeStack from "./homeStack";
import aboutStack from "./aboutStack";
import acountStack from "../Routes/accountStack";
import friendsStack from "../Routes/friendsStack";

const { Navigator, Screen } = createDrawerNavigator();

export const RootDrawerNavigator = () => (
  <Navigator initialRouteName="Home" drawerContent={props=><DrawerContent {...props}/>}>
    <Screen name="Home" component={HomeStack} />
    <Screen name="Account" component={acountStack} />
    <Screen name="Friends" component={friendsStack} />
    <Screen name="About" component={aboutStack} />
  </Navigator>
);




export const AppNavigator = () => (
  <NavigationContainer theme={DefaultTheme} >
    <RootDrawerNavigator />
  </NavigationContainer>
);

export default AppNavigator;
