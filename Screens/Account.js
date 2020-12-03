import React from "react";
import { Text, View, StyleSheet ,Image,TouchableOpacity} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";




export default function Acount({navigation}) {
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
        <TouchableOpacity onPress={() => navigation.navigate("Achements")}>
          <View style={styles.Box}>
            <Icon
              name="trophy"
              style={{
                color: "#E36413",
                fontSize: 20,
                paddingLeft: 10,
                paddingRight: 70,
              }}
            />
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text style={styles.boxText}>Achievements</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.Box}>
          <Icon
            name="map-marker"
            style={{
              color: "#E36413",
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
              color: "#E36413",
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
    color: "#E36413",
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
    backgroundColor: "white",
    borderColor: "#5F0F40",
    borderRadius: 20,
  },
  yourDetails: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    fontStyle: "italic",
  },
  Box: {
    marginTop: 20,
    height: 50,
    borderWidth: 2,
    borderColor: "#E36413",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 5,
  },
  boxText: {
    fontSize: 20,
    color: "#E36413",
    fontWeight: "500",
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
  HeadText: {
    color: "#A3A3A3",
    fontSize: 20,
    fontWeight: "500",
  },
  nickDisplay: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 30,
  },
});