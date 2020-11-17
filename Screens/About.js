import React from "react";
import { Text, View, StyleSheet ,Button,Image} from "react-native";
import { globalStyles } from "../styles/global";

export default function About() {
    
  return (
    <View style={globalStyles.container}>
      <View>
        <Image source={require("../assets/AtajoNoBackground.png")} style={{height:100,width:100}}/>
      </View>
      <View style={globalStyles.parragrapg}>
        <Text style={{ fontSize: 19, fontWeight: "bold", color: "#E36413" }}>
          Hello from Atajo team.
        </Text>
      </View>
      <View style={globalStyles.parragrapg}>
        <Text style={{ fontSize: 15, textAlign: "center" }}>
          This app ir for navigation in citys, it will create the fastest rout
          to your destination.
        </Text>
      </View>
    </View>
  );
}

