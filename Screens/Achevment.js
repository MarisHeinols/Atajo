
import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Acount() {
  const [people, setPeople] = useState([
    {
      name: "Explorer",
      whatToDo: "Explore 5 new places in 24h",
      iconName: "compass-outline",
      color: "#D8D8D8",
      key: "1",
    },
    {
      name: "Speedster",
      whatToDo: "Use fast mode 5 times in 24h",
      iconName: "speedometer",
      color: "#E36413",
      key: "2",
    },
    {
      name: "Hiker",
      whatToDo: "Walk 20km total",
      iconName: "bag-personal",
      color: "#E36413",
      key: "3",
    },
    {
      name: "Hello friends",
      whatToDo: "Invite 5 friends",
      iconName: "account-group",
      color: "#D8D8D8",
      key: "4",
    },
    {
      name: "This is nice",
      whatToDo: "Use scenic mode 10 times",
      iconName: "binoculars",
      color: "#E36413",
      key: "5",
    },
    {
      name: "This is here?",
      whatToDo: "Explore 5 new places",
      iconName: "map-marker-radius",
      color: "#D8D8D8",
      key: "6",
    },
    {
      name: "Marathon",
      whatToDo: "Do 40 km in 24h",
      iconName: "flag-checkered",
      color: "#D8D8D8",
      key: "7",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>Achevments</Text>
      </View>
      <View style={styles.infoScreen}>
        <Icon name="trophy" size={70} color="#E36413" />
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            paddingLeft: 10,
            color: "#888888",
          }}
        >
          3/7
        </Text>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (
          <View style={{ paddingTop: 20,alignItems:"center" }}>
            <View style={styles.achInfoBox} backgroundColor={item.color}>
              <View style={styles.achPresentation}>
                <Icon name={item.iconName} size={40} />
                <Text>{item.name}</Text>
              </View>
              <View style={{ width: 250 }}>
                <Text style={styles.archMainText}>{item.whatToDo}</Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
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
    fontWeight: "500",
  },
  achInfoBox: {
    width: '99%',
    aspectRatio:10/2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"space-evenly",
    backgroundColor: "#D8D8D8",
    borderWidth:1,
    borderColor: "#D8D8D8",
    borderRadius:20,
    
    
  },
  achDetails: {
    justifyContent: "center",
    alignItems: "center",
  },
  achPresentation: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
  archMainText: {
    fontSize: 20,
  },
  infoScreen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom:30,
  },
});
