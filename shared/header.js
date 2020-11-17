import React from "react";
import { StyleSheet,Image, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";

export default function Header({navigation}) {

    const openMenu = ()=>{
        navigation.openDrawer()
    }

  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={40}
        onPress={openMenu}
        style={styles.icon}
      />
      <View style={{paddingBottom:10}}>
        <Image
          source={require("../assets/AtajoNoBackground.png")}
          style={styles.logo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get("screen").width,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  logo: {
    height:60,
    width:60,
    
  },
  icon: {
    paddingRight: "33%",
    color: "white",
  },
});
