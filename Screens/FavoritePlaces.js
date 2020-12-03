import React, { useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function FavoritePlaces() {
  const [places, setPlace] = useState([
    {
      key: "1",
      name: "ViA Terbetas iela",
      place: "Tērbatas iela 10, Valmiera, LV-4201",
      saved: "01.09.2020",
    },
    {
      key: "2",
      name: "ViA Cesu iela",
      place: "Cēsu iela 4, Valmiera, LV-4201",
      saved: "03.09.2020",
    },
    {
      key: "3",
      name: "Swedbanka",
      place: "Rīgas iela 15, Valmiera, LV-4201",
      saved: "20.07.2020",
    },
    {
      key: "4",
      name: "Theater",
      place: "Lāčplēša iela 4, Valmiera, LV-4201",
      saved: "04.07.2020",
    },
    {
      key: "5",
      name: "Rimi",
      place: "Rīgas iela 74, Valmiera, LV-4201",
      saved: "10.10.2020",
    },
    {
      key: "6",
      name: "Csdd",
      place: "Eduarda Lācera iela 3, Valmiera, LV-4201",
      saved: "15.08.2020",
    },
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>Favorite places</Text>
      </View>
      <View style={styles.infoScreen}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "700",
            paddingLeft: 10,
            color: "#888888",
          }}
        >
          Valmiera
        </Text>
      </View>
      <FlatList
        data={places}
        renderItem={({ item }) => (
          <View style={{ paddingTop: 20,alignItems:"center" }}>
            <View style={styles.InfoBox}>
              <View style={styles.Presentation}>
                <Icon name="pin" size={30} color="white" />
                <Text style={{ fontWeight: "500", color: "white" }}>
                  {item.name}
                </Text>
              </View>
              <View
                style={{ width: 250, justifyContent: "center", paddingTop: 10 }}
              >
                <Text style={styles.MainText}>{item.place}</Text>
                <View
                  style={{
                    alignSelf: "flex-end",
                    width: 100,
                    height: 30,
                    paddingTop: 10,
                  }}
                >
                  <Text style={{ color: "#E39B6D" }}>{item.saved}</Text>
                </View>
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
  InfoBox: {
    width: "99%",
    aspectRatio:10/2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#E36413",
    borderWidth: 1,
    borderColor: "#E36413",
    borderRadius: 20,
  },
  Details: {
    justifyContent: "center",
    alignItems: "center",
  },
  Presentation: {
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
  },
  MainText: {
    fontSize: 16,

  },
  infoScreen: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
    paddingBottom: 30,
  },
});
