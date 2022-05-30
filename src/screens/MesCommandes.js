import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Touchable,
} from "react-native";
import { Platform } from "react-native";
import Card from "../components/home/CardMesEnregistrements";

import { Text,  Button, Icon } from "react-native-elements";
const MesCommandes = (props) => {
  return (
    <ScrollView>

    <View style={styles.container} >
      <TouchableOpacity style={styles.card}>
      <Card Titre = "Velo VTT" prix= "100 DT" 
        path={require('../../assets/velo.jpeg')}/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Card Titre = "sac HM" prix= "100 DT" 
        path={require('../../assets/sac.jpeg')}/>
        </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      <Card Titre = "Pull zara" prix= "100 DT" 
        path={require('../../assets/pull.jpg')}/>
        </TouchableOpacity>

        <View style={styles.card}>
      <Card Titre = "Florale" prix= "100 DT"
        path={require('../../assets/parfum.jpg')}/>
      </View>
      <View style={styles.card}>
      <Card Titre = "Jean HM" prix= "100 DT" 
        path={require('../../assets/jean.jpg')}/>
        </View>

        <View style={styles.card}>
      <Card Titre = "Thermomix" prix= "100 DT"
        path={require('../../assets/thermomix.jpeg')}/>
      </View>
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around", // space-around
    marginTop: "5.5%",
    alignItems: "center",
  },
  card: {
    backgroundColor: "white",
    alignContent: "center",
    borderRadius: 15,
    marginVertical:   35 ,
    width: Platform.OS === "android" ? "42%" : "43%", // android 40  / ios 45
    height: Platform.OS === "android" ? "22%" : "22.5%", // android 23 / ios 38
  },
  text: {
    textAlign: "center",
    justifyContent: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
  },
});
export default MesCommandes;
