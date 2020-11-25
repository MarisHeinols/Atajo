import React from "react";
import { Text, View, StyleSheet ,Image} from "react-native";
import { ceil } from "react-native-reanimated";
import { globalStyles } from "../styles/global";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";



export default function Acount() {
  return (
    <View>
      <View style={styles.banner}>
        <Text style={styles.bannerTXT}>Profile</Text>
      </View>
      <View style={styles.accContainer}>
        <View style={styles.nickDisplay}>
          <Text style={styles.HeadText}>GuestNick</Text>
        </View>
        <View style={styles.detailsContainer}>
          <View>
            <Image
              source={require("../assets/avataaars.png")}
              style={{ height: 100, width: 100, paddingBottom: 10 }}
            />
          </View>
          <View style={styles.infoContainer}>
            <Text style={styles.detailsStyle}>
              Name:<Text style={styles.yourDetails}> Guest</Text>
            </Text>
            <Text style={styles.detailsStyle}>
              Surname:<Text style={styles.yourDetails}> Guest</Text>
            </Text>
            <Text style={styles.detailsStyle}>
              Email:<Text style={styles.yourDetails}> Guest123@gmail.com</Text>
            </Text>
          </View>
        </View>
        <View style={styles.Box}>
          <Icon
            name="trophy"
            style={{
              color: "white",
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 70,
            }}
          />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.boxText}>Achievements</Text>
          </View>
        </View>
        <View style={styles.Box}>
          <Icon
            name="map-marker"
            style={{
              color: "white",
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 70,
            }}
          />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.boxText}>Favorite places</Text>
          </View>
        </View>
        <View style={styles.Box}>
          <Icon
            name="cogs"
            style={{
              color: "white",
              fontSize: 20,
              paddingLeft: 10,
              paddingRight: 70,
            }}
          />
          <View style={{ alignItems: "center", justifyContent: "center" }}>
            <Text style={styles.boxText}>Settings</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
    borderBottomWidth: 3,
    paddingBottom: 30,
    borderBottomColor: "white",
  },
  infoContainer: {
    flexDirection: "column",
    paddingTop: 10,
  },
  detailsStyle: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  accContainer: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 300,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 3,
    backgroundColor: "#E36413",
    borderColor: "#5F0F40",
    borderRadius: 20,
  },
  yourDetails: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
    fontStyle: "italic",
  },
  Box: {
    marginTop: 20,
    height: 50,
    borderWidth: 2,
    borderColor: "white",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  boxText: {
    fontSize: 20,
    color: "white",
    fontFamily: "Arimo-Bold",
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
  },
  HeadText: {
    color: "#FFC59F",
    fontSize: 20,
    fontWeight: "500",
  },
  nickDisplay: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
});