import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Account from "../Screens/Account";
import About from "../Screens/About";
import Friends from "../Screens/Friends";
import Header from "../shared/header";

const friendsStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Friends"
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
        name="Friends"
        component={Friends}
        options={{
          headerTitle: () => <Header navigation={navigation} />,
        }}
      />
      <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      <Stack.Screen
        name={"About"}
        component={About}
        options={{ title: "About" }}
      />
      <Stack.Screen
        name={"Account"}
        component={Account}
        options={{ title: "Account" }}
      />
    </Stack.Navigator>
  );
};

export default friendsStack;
