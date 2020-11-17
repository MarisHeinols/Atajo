import React, { useEffect, useState } from 'react';
import MapView from 'react-native-maps';
import {StyleSheet,Dimensions} from 'react-native'

let { width, height } = Dimensions.get("window");

const Map =()=>{
    const aspect_Ratio = width / height;
    const latitude_Delta = 0.1; 
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
    return (
      <MapView
        style={styles.map}
        loadingEnabled={true}
        showsUserLocation followsUserLocation
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta:latitude_Delta,
          longitudeDelta:longitude_Delta,
        }}
      >
        <MapView.Marker
          
        />
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