import React from "react";
import { Text, View, StyleSheet, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";
import { useTheme } from "@react-navigation/native";

export default function About() {
  const { colors } = useTheme();
  const theme = useTheme();

  return (
    <View>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>About</Text>
      </View>
      <View style={globalStyles.container}>
        <View>
          <Image
            source={require("../assets/AtajoNoBackground.png")}
            style={{ height: 100, width: 100 }}
          />
        </View>
        <View>
          <Text style={styles.OragreTXT}>Hello from Atajo team!</Text>
        </View>
        <View style={{ paddingBottom: 30, paddingTop: 20 }}>
          <Text
            style={{
              fontSize: 15,
              flexDirection: "row",
              color: theme.dark ? "white" : "black",
            }}
          >
            Copyright © 2020 Atajo team. All rights reserved.
          </Text>
        </View>
        <View style={{ paddingBottom: 70, paddingTop: 20 }}>
          <View style={styles.dataField}>
            <View style={globalStyles.parragraph}>
              <Text
                style={{ fontSize: 15, textAlign: "center", color: "#E36413" }}
              >
                This app is designed for pedestrian use in a city to find the
                shortest route from point A to point B, providing scenic
                attractions along the way.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bannerBottom}>
          <Text style={styles.OragreTXT}>Made by</Text>
          <Text style={{ color: "grey" }}>Māris Heinols</Text>
          <Text style={{ color: "grey" }}>Egija Graudiņa</Text>
          <Text style={{ color: "grey" }}>Aleksandrs Barbins</Text>
          <Text style={{ color: "grey" }}>Roberts Ronins Puķītis</Text>
          <Text style={{ color: "grey" }}>Rūdis Rūdolfs Dūmiņš</Text>
          <Text style={{ color: "grey" }}>Mārtiņš Jēkabs Ausmanis</Text>
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
    fontWeight:'500'
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
  parragraph: {
    alignItems: "center",
    marginVertical: 8,
    lineHeight: 20,
    width: "70%",
    paddingTop: 20,
  },
  bannerBottom: {
    width: "100%",
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#5F0F40",
    backgroundColor: "#5F0F40",
    justifyContent: "center",
    alignItems: "center",
  },
});
