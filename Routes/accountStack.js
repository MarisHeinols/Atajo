import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Account from "../Screens/Account";
import About from "../Screens/About";
import Friends from "../Screens/Friends";
import Header from "../shared/header";
import Achevemnt from '../Screens/Achevment';


const acountStack = ({ navigation }) => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="Acount"
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
        name="Acount"
        component={Account}
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
        name={"Friends"}
        component={Friends}
        options={{ title: "Friends" }}
      />
      <Stack.Screen
        name={"Achements"}
        component={Achevemnt}
        options={{headerTitle:false}}
        
      />
    </Stack.Navigator>
  );
};

export default acountStack;
