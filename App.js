import "react-native-gesture-handler";
import React, { useState } from "react";
import Home from "./Screens/Home";
import * as Font from "expo-font";
import {AppLoading} from 'expo';
import { AppNavigator } from "./Routes/drawer";



const getFonts = () =>
  Font.loadAsync({
    "Arimo-regular": require("./assets/Fonts/Arimo-Regular.ttf"),
    "Arimo-bold": require("./assets/Fonts/Arimo-Bold.ttf"),
  });

  

export default function App() {
  const[fontsLoaded,setFontsLoaded]=useState(false);
  if(fontsLoaded){
    return( <AppNavigator></AppNavigator>
  
    );
  }else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      ></AppLoading>
    );
  }

  
}
