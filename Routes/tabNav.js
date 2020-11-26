import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Home from './homeStack';


const Tab = createMaterialBottomTabNavigator();

export const TabNav = () => (
  <Tab.Navigator
    initialRouteName="Fast"
    activeColor="#E36413"
    shifting={true}
  >
    <Tab.Screen
      name="Scenic"
      component={Home}
      options={{
        tabBarLabel: "Scenic",
        tabBarColor: "#5F0F40",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="image-filter-hdr" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Fast"
      component={Home}
      options={{
        tabBarLabel: "Fast",
        tabBarColor: "#5F0F40",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="run" color={color} size={30} />
        ),
      }}
    />
    <Tab.Screen
      name="Saved"
      component={Home}
      options={{
        tabBarLabel: "Saved",
        tabBarColor: "#5F0F40",
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="content-save" color={color} size={30} />
        ),
      }}
    />
  </Tab.Navigator>
);
  export default TabNav();
