import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';


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
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        customMapStyle={theme.dark ? mapDarkStyle : mapStandartStyle}
        loadingEnabled={true}
        showsUserLocation followsUserLocation
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta:latitude_Delta,
          longitudeDelta:longitude_Delta,
        }}
      >
      

      </MapView>
    );
}
const styles = StyleSheet.create({
    map:{
       height:height,
       width:width,
       
    }
})
export default Map;