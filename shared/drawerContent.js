import { DrawerContentScrollView } from "@react-navigation/drawer";
import React from 'react';
import { View,StyleSheet, Dimensions,Image} from 'react-native';
import {DrawerItem} from '@react-navigation/drawer';
import {Title,Caption,Drawer,Text,TouchableRipple,Switch,useTheme} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {AuthContext}from '../components/context';




const dvWidth = Dimensions.get('window').width/100;
const dvHeight = Dimensions.get("window").height / 100;

const DrawerContent=(props)=>{

    const {signOut,toggleTheme}=React.useContext(AuthContext);
    const paperTheme =useTheme();

    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView keyboardShouldPersistTaps='handled'>
          <View style={styles.userInfoSection}>
            <View style={{ flexDirection: "row", marginTop: 2 * dvHeight }}>
              <Image
                source={require("../assets/avataaars.png")}
                style={styles.userPic}
              />
              <View style={styles.useriNFO}>
                <Title style={styles.title}>Guest Guest</Title>
                <View style={{flexDirection:"row"}}>
                  <Icon name="email" style={{paddingTop:6,paddingRight:5,color:'grey'}}/>
                  <Caption>Guest123@gmail.com</Caption>
                </View>
              </View>
            </View>
          </View>
          <Drawer.Section style={styles.MenuOptions}>
            <DrawerItem
              icon={() => (
                <Icon
                  name="home-outline"
                  style={{ fontSize: 3.5 * dvHeight, color: "grey" }}
                />
              )}
              label="Home"
              onPress={() => {
                props.navigation.navigate("Home");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  name="account-outline"
                  style={{ fontSize: 3.5 * dvHeight, color: "grey" }}
                />
              )}
              label="Profile"
              onPress={() => {
                props.navigation.navigate("Account");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  name="account-group-outline"
                  style={{ fontSize: 3.5 * dvHeight, color: "grey" }}
                />
              )}
              label="Friends"
              onPress={() => {
                props.navigation.navigate("Friends");
              }}
            />
            <DrawerItem
              icon={() => (
                <Icon
                  name="information-outline"
                  style={{ fontSize: 3.5 * dvHeight, color: "grey" }}
                />
              )}
              label="About"
              onPress={() => {
                props.navigation.navigate("About");
              }}
            />
          </Drawer.Section>
          <Drawer.Section>
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}
            >
              <View style={styles.prefrences}>
                <Text style={{ fontSize: 2 * dvHeight, color: "grey" }}>
                  Dark Theme
                </Text>
                <View pointerEvents="none" style={{ paddingLeft: 20 }}>
                  <Switch value={paperTheme.dark} color="#E36413" />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </DrawerContentScrollView>
        <Drawer.Section style={styles.signOutContent}>
          <DrawerItem
            icon={() => (
              <Icon
                name="exit-to-app"
                style={{ fontSize: 3.5 * dvHeight, color: "grey" }}
              />
            )}
            label="Sign out"
            onPress={()=>{signOut()}}
          ></DrawerItem>
        </Drawer.Section>
      </View>
    );
}
export default DrawerContent;

const styles = StyleSheet.create({
  userInfoSection: {
      paddingLeft:20,
  },
  title: {},
  useriNFO: {
    flexDirection: "column",
    paddingLeft: 20,
  },
  userPic:{
    height:60,
    width:60,
  },
  MenuOptions:{
    paddingTop:20,
    
  },
  prefrences:{
    paddingTop:10,
    paddingBottom:10,
    paddingLeft:20,
    flexDirection:"row",
    alignContent:"center",
  },
  signOutContent:{
    paddingLeft:10

  }

});