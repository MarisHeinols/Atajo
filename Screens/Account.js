import React from "react";
import { Text, View, StyleSheet ,Image} from "react-native";
import { globalStyles } from "../styles/global";



export default function Acount() {
  return (
    <View style={styles.accContainer}>
      <View style={styles.detailsContainer}>
        <View>
          <Image
            source={require("../assets/avataaars.png")}
            style={{ height: 100, width: 100 }}
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
    </View>
  );
}
const styles = StyleSheet.create({
  detailsContainer: {
    flexDirection: "row",
  },
  infoContainer: {
    flexDirection: "column",
  },
  detailsStyle: {
    paddingTop: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
  accContainer: {
    paddingTop: 100,
    paddingLeft: 40,
  },
  yourDetails: {
    fontSize: 15,
    fontWeight: "bold",
    color:'grey',
    fontStyle:"italic",
    
  },
});