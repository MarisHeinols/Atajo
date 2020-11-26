import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { BottomNavigation } from "react-native-paper";
import { globalStyles } from "../styles/global";

export default function About() {

  return (
    <View>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>About</Text>
      </View>
      <View style={globalStyles.container}>

        <View> 
          <Image source={require("../assets/AtajoNoBackground.png")} style={{ height: 100, width: 100 }} />
        </View>
        <View>
          <Text style={styles.OragreTXT}>
            Hello from Atajo team!
        </Text>
        </View>
        <View style={{ paddingBottom: 30, paddingTop: 20}}>
          <Text style={{ fontSize: 15, color: "black", flexDirection: "row" }}>
            Copyright © 2020 Atajo team. All rights reserved.
        </Text>
        </View>
        <View style={{ paddingBottom: 70, paddingTop: 20}}>
          <View style={styles.dataField}>
            <View style={globalStyles.parragraph}>
              <Text style={{ fontSize: 15, textAlign: "center", color: "#E36413" }}>
                This  app is designed for pedestrian use in a city to find the shortest route from
                point A to point B, providing scenic attractions along the way.
          </Text>
            </View>
          </View>
        </View>
        <View style={styles.banner}>
          <Text style={styles.OragreTXT}>Made by</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Māris Heinols</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Egija Graudiņa</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Aleksandrs Barbins</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Roberts Ronins Puķītis</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Rūdis Rūdolfs Dūmiņš</Text>
          <Text style={{color: "grey",fontFamily: "Arimo-bold",}}>Mārtiņš Jēkabs Ausmanis</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#5F0F40",
    backgroundColor: "#5F0F40",
    justifyContent: "center",
    alignItems: "center",
  },
  bannerTXT: {
    color: "white",
    fontFamily: "Arimo-bold",
  },
  OragreTXT: {
    fontSize: 30,
    textAlign: "center",
    color: "#E36413",
  },
  dataField: {
    width: 290,
    borderWidth: 3,
    paddingTop: 10,
    paddingBottom: 10,
    borderColor: "#E36413",
    alignItems: "center",
  },
  parragraph:{
    alignItems:"center",
    marginVertical:8,
    lineHeight:20,
    width:'70%',
    paddingTop:20,
  }
});
