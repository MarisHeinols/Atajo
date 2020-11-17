import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../Screens/About";
import Home from "../Screens/Home";
import Account from "../Screens/Account";
import Friends from "../Screens/Friends";
import Header from "../shared/header";

const aboutStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="About"
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
        name="About"
        component={About}
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
        name={"Home"}
        component={Home}
        options={{ title: "Home" }}
      />
      <Stack.Screen
        name={"Friends"}
        component={Friends}
        options={{ title: "Friends" }}
      />
    </Stack.Navigator>
  );
};

export default  aboutStack ;
