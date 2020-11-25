import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import Home from "./Screens/Home";
import * as Font from "expo-font";
import {AppLoading} from 'expo';
import { RootDrawerNavigator } from "./Routes/drawer";
import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";
import {AuthContext}from './components/context';
import RootStackScreen from './Routes/RootStackScreen';
import {NavigationContainer,} from "@react-navigation/native";



const getFonts = () =>
  Font.loadAsync({
    "Arimo-regular": require("./assets/Fonts/Arimo-Regular.ttf"),
    "Arimo-bold": require("./assets/Fonts/Arimo-Bold.ttf"),
  });

  

export default function App() {
 
  const [isLoading,setIsLoading]=React.useState(true);
  const [userToken,setUserToken]=React.useState(null);

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('fgkj');
      setIsLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setIsLoading(false);
    },
    signUp: () => {
      setUserToken("fgkj");
      setIsLoading(false);
    },
  }));

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false);
    },1000);
  },[]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <NavigationContainer>
          {userToken != null ? <RootDrawerNavigator /> : <RootStackScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
  }

  
}
