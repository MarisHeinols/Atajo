import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,Dimensions,Text,TextInput, Platform} from 'react-native';
import {useTheme} from 'react-native-paper';
import { View } from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


let { width, height } = Dimensions.get("window");

const mapDarkStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];


const mapStandartStyle = [{
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
  
];


const Map =()=>{
    const aspect_Ratio = width / height;
    const latitude_Delta = 0.01; 
    const longitude_Delta = latitude_Delta * aspect_Ratio;
    const [longitude,setLongitude]=useState();
    const [latitude,setLatitude]=useState();

    useEffect(()=>{
        function setPosition({coords:{latitude,longitude}}){
            setLongitude(longitude);
            setLatitude(latitude);
        }
        navigator.geolocation.getCurrentPosition(setPosition);
        let watcher=navigator.geolocation.watchPosition(setPosition,err=>console.error(err),{enableHighAccuracy:true});
        return()=>{
            navigator.geolocation.clearWatch(watcher);
        }
    });
    const theme=useTheme();
    return (
      
      <View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          customMapStyle={theme.dark ? mapDarkStyle : mapStandartStyle}
          loadingEnabled={true}
          showsUserLocation
          followsUserLocation
          region={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: latitude_Delta,
            longitudeDelta: longitude_Delta,
          }}
        ></MapView>
        <View style={styles.serchBox}>
          <TextInput 
            placeholder="Search here"
            placeholderTextColor="#000"
            autoCapitalize='none'
            style={{flex:1,padding:0,fontWeight:'500'}}
          />
          <Icon name="magnify" size={20} style={{paddingTop:2}}/>
        </View>
      </View>
    );
}
const styles = StyleSheet.create({
  map: {
    height: height,
    width: width,
  },
  serchBox: {
    position: "absolute",
    marginTop: Platform.os == "ios" ? 40 : 20,
    flexDirection: "row",
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 8,
    padding: 10,
    elevation: 10,
    borderWidth: 2,
    borderColor: "#E36413",
    justifyContent:"center",
    alignItems:"center",
  },
});
export default Map;