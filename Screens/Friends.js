import React, { useState } from "react";
import { StyleSheet, View, FlatList, Image, Text } from 'react-native';


export default function Friends() {
  const [people, setPeople] = useState([
    { nick: "Hariks", name: "Harry", surname: "Armpits", key: "1", stat1: "online" },
    { nick: "Bender", name: "Ben", surname: "Dover", key: "2", stat1: "online" },
    { nick: "Mic", name: "Made", surname: "Inchina", key: "3", stat2: "offline" },
    { nick: "Niko", name: "Nikolajs", surname: "Molotovs", key: "4", stat1: "online" },
    { nick: "Frankfurt", name: "Frankfurt", surname: "Lebenhauve", key: "5", stat2: "offline" },
    { nick: "Bot", name: "Bot", surname: "Tom", key: "6", stat1: "online" },
    { nick: "Mapolo", name: "Marko", surname: "Polo", key: "7", stat2: "offline" },
    { nick: "Lui", name: "Luigi", surname: "Pasta", key: "8", stat1: "online" },
    { nick: "xXx360xXx", name: "Ben", surname: "Ten", key: "9", stat2: "offline" },
    { nick: "Sashaljnik", name: "Sashka", surname: "Baripins", key: "10", stat1: "online" },
    { nick: "Vova", name: "Boriss", surname: "Shtorenburg", key: "11", stat2: "offline" },
    { nick: "Humlin", name: "Hummer", surname: "Havan", key: "12", stat1: "online" },
    
  ]);
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>Friends</Text>
      </View>
      <FlatList
        data={people}
        renderItem={({ item }) => (

          <View style={{ paddingTop: 20 }}>
            <View style={styles.dataField}>
              <View style={{ paddingLeft: 10 }}>
                <Image
                  source={require('../assets/avataaars.png')}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <View style={styles.infoContainer}>
                <View>
                  <Text style={styles.item}>{item.nick} </Text>
                </View>

                <View style={styles.infoField}>
                  <Text style={styles.item2}>{item.name} </Text>
                  <Text style={styles.item2}>{item.surname} </Text>

                </View>

              </View>
              <View style={styles.statbar}>
                <Text style={styles.status1}>{item.stat1}
                  <Text style={styles.status2}>
                    {item.stat2}
                  </Text>
                </Text>

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
  dataField: {
    width: 300,
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 3,
    borderColor: "#5F0F40",
    backgroundColor: "#E36413",
  },
  infoField: {
    flexDirection: "row",
    width: 100,
  },
  infoContainer: {
    paddingLeft: 10,
  },
  item: {
    fontSize: 20,
    fontWeight: "500",
    color: "white",
  },
  item2: {
    color: "white",
    fontStyle: "italic",
  },
  statbar: {
    justifyContent: "center",
    paddingLeft: 80,
  },
  status1: {
    color: "white",
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#5F0F40",
    borderRadius: 3,
  },
  status2: {
    color: "black",
    fontSize: 12,
    borderBottomWidth: 1,
    borderColor: "#5F0F40",
    borderRadius: 3,
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
    fontFamily: "Arimo-bold",
  }
})
