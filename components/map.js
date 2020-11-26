import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {StyleSheet,Dimensions} from 'react-native';
import {useTheme} from 'react-native-paper';


let { width, height } = Dimensions.get("window");

const mapDarkStyle = [
  [
    {
      elementType: "geometry",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#212121",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#9e9e9e",
        },
      ],
    },
    {
      featureType: "administrative.land_parcel",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#bdbdbd",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [
        {
          color: "#181818",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#1b1b1b",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#8a8a8a",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#373737",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [
        {
          color: "#3c3c3c",
        },
      ],
    },
    {
      featureType: "road.highway.controlled_access",
      elementType: "geometry",
      stylers: [
        {
          color: "#4e4e4e",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#616161",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#757575",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#3d3d3d",
        },
      ],
    },
  ],
];

const mapStandartStyle = [[]];


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