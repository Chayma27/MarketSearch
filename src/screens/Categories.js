import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  
} from "react-native";
import {Platform} from 'react-native';

import { Text, Card, Button, Icon } from "react-native-elements";
const Categories = (props) => {
  return (
      <View style={styles.container}>

        <Card containerStyle={styles.card} elevation={1} Button={true}>
          <Image
            source={require("../../assets/iconCategories/clothes.png")}
            style={{  height: "67%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Mode</Text>
        </Card>

        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/house-decoration.png")}
            style={{ height: "67%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Maison & cuisine</Text>
        </Card>
        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/car.png")}
            style={{  height: "65%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Véhicule</Text>
        </Card>
        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/electronic-device.png")}
            style={{ height: "65%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Multimédia</Text>
        </Card>
        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/loisir.png")}
            style={{ height: "70%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Loisir</Text>
        </Card>
        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/sport.png")}
            style={{  height: "65%", resizeMode: "contain" }}
          />
                    <Text style={styles.text}>Sport</Text>

        </Card>
        <Card containerStyle={styles.card} elevation={1}>

          <Image
            source={require("../../assets/iconCategories/produits-de-beautee.png")}
            style={{  height: "55%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Visage et Beauté</Text>
        </Card>
        <Card containerStyle={styles.card} elevation={1}>
          <Image
            source={require("../../assets/iconCategories/animal-track.png")}
            style={{ height: "55%", resizeMode: "contain" }}
          />
          <Text style={styles.text}>Animaux</Text>
        </Card>
      </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap : 'wrap',
    justifyContent: "space-around",
    marginTop: "5.5%"
  },
  card: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent : "center",
    margin: 10,
    width : Platform.OS ==="android" ? "40%" : "45%", // android 40  / ios 45 
    height : Platform.OS === "android" ? "23%" : "24%" // android 23 / ios 38
  },
  text: {
    textAlign: "center",
    justifyContent : "flex-end",
    fontWeight : "bold",
    fontSize : 17
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
  },
 
});
export default Categories;
