import React from 'react';

import { createStackNavigator }from '@react-navigation/stack';

import SplashScreen from '../Screens/splashScreen';
import SignInScreen from '../Screens/signInScreen';
import SignUpScreen from '../Screens/signUpScreen';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }) => (
  <RootStack.Navigator headerMode="none">
    <RootStack.Screen name="SplashScreen" component={SplashScreen} />
    <RootStack.Screen name="SignInScreen" component={SignInScreen} />
    <RootStack.Screen name="SignUpScreen" component={SignUpScreen} />
  </RootStack.Navigator>
);
export default RootStackScreen;