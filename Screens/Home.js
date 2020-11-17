import React from 'react';
import {Text,View,StyleSheet,Button,SafeAreaView}from 'react-native';
import {globalStyles}from '../styles/global';
import Map from '../components/map';


export default function Home(){
    
    return (
      <SafeAreaView>
        <Map/>
        
      </SafeAreaView>
    );
};

