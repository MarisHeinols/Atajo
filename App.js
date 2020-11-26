import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { RootDrawerNavigator } from "./Routes/drawer";
import { View } from "react-native-animatable";
import { ActivityIndicator } from "react-native-paper";
import {AuthContext}from './components/context';
import RootStackScreen from './Routes/RootStackScreen';
import {NavigationContainer,DarkTheme as NavigationDarkTheme,DefaultTheme as NavigationDefaultTheme} from "@react-navigation/native";
import {Provider as PaperProvider,DarkTheme as PaperDarkTheme,DefaultTheme as PaperDefaultTheme}from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


  

export default function App() {

  const [cDarkTheme, setcDarkTheme] = React.useState(false);
  //const [isLoading,setIsLoading]=React.useState(true);
  //const [userToken,setUserToken]=React.useState(null);

  const initalLoginState={
    isLoading:true,
    userName:null,
    userToken:null,
  };

  const loginReducer=(prevState,action)=>{
    switch (action.type) {
      case "RetriveToken":
        return {
          ...prevState,
          userToken:action.token,
          isLoading:false,
      };
      case "Login":
        return {
          ...prevState,
          userName:action.id,
          userToken:action.token,
          isLoading: false,
        };
      case "LogOut":
        return {
          ...prevState,
          userName:null,
          userToken:null,
          isLoading: false,
        };
      case "Register":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  const [loginState,dispatch]=React.useReducer(loginReducer,initalLoginState);


  const CustomDefaultTheme={
    ...NavigationDefaultTheme,
    ...PaperDefaultTheme,
    colors:{
      ...NavigationDefaultTheme.colors,
      ...PaperDefaultTheme.colors,
      background:'white',
      text:'black',
    }
  }
  const CustomDarkTheme = {
    ...NavigationDarkTheme,
    ...PaperDarkTheme,
    colors: {
      ...NavigationDarkTheme.colors,
      ...PaperDarkTheme.colors,
      background: "black",
      text: "white",
    },
  };
  const theme = cDarkTheme ? CustomDarkTheme:CustomDefaultTheme;

  const authContext = React.useMemo(() => ({
    signIn: async(foundUser) => {
      //setUserToken('fgkj');
      //setIsLoading(false);
      const userToken=String(foundUser[0].userToken);
      const userName=foundUser[0].userName;
      
        try{
          await AsyncStorage.setItem('userToken',userToken)
        }catch(e){
          console.log(e);
        }
      
      dispatch({type:'Login',id:userName,token:userToken})
    },
    signOut: async() => {
      //setUserToken(null);
      //setIsLoading(false);
      try {
        await AsyncStorage.removeItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "LogOut" });
    },
    signUp: () => {
      //setUserToken("fgkj");
      //setIsLoading(false);
    },
    toggleTheme:()=>{
      setcDarkTheme(cDarkTheme=>!cDarkTheme);
    }
  }),[]);

  useEffect(()=>{
    setTimeout(async()=>{
      //setIsLoading(false);
      let userToken;
      userToken=null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (e) {
        console.log(e);
      }
      dispatch({ type: "RetriveToken", token: userToken });
    },1000);
  },[]);

  if (loginState.isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  } else {
    return (
      <PaperProvider theme={theme}>
        <AuthContext.Provider value={authContext}>
          <NavigationContainer theme={theme}>
            {loginState.userToken != null ? <RootDrawerNavigator /> : <RootStackScreen />}
          </NavigationContainer>
        </AuthContext.Provider>
      </PaperProvider>
    );
  }

  
}
