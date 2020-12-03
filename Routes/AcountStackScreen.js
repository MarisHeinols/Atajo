import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import AcountScreen from '../Screens/Account';
import AchementsScreen from '../Screens/Achevment';

const RootStack = createStackNavigator();

const AcountStackNav = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="Acount" component={AcountScreen} />
    <RootStack.Screen name="Achements" component={AchementsScreen} />
  </RootStack.Navigator>
);
export default AcountStackNav;
