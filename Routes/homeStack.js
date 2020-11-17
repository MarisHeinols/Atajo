import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Account from "../Screens/Account";
import About from "../Screens/About";
import Header from '../shared/header';
import Freinds from "../Screens/Friends"
import Friends from "../Screens/Friends";

const homeStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#5F0F40",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitleAlign: "left",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: () => <Header navigation={navigation} />,
        }}
      />
      <Stack.Screen
        name="Account"
        component={Account}
        options={{ title: "Account" }}
      />
      <Stack.Screen
        name={"Friends"}
        component={Friends}
        options={{ title: "Friends" }}
      />
      <Stack.Screen
        name={"About"}
        component={About}
        options={{ title: "About" }}
      />
    </Stack.Navigator>
  );
};

export default homeStack;
