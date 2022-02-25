import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Platform } from "react-native";

import { Text, Card, Button, Icon } from "react-native-elements";
const Categories = (props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scmode")}
      >
        <Image
          source={require("../../assets/iconCategories/clothes.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Mode</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scmaison")}
      >
        <Image
          source={require("../../assets/iconCategories/house-decoration.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Maison & Cuisine</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scvehicule")}
      >
        <Image
          source={require("../../assets/iconCategories/car.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Véhicule</Text>
      </TouchableOpacity>
           <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scmultimedia")}
      >
        <Image
          source={require("../../assets/iconCategories/electronic-device.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Multimédia</Text>
      </TouchableOpacity>
           <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scloisir")}
      >
        <Image
          source={require("../../assets/iconCategories/loisir.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Loisir</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scsport")}
      >
        <Image
          source={require("../../assets/iconCategories/sport.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Sport</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scvisage")}
      >
        <Image
          source={require("../../assets/iconCategories/produits-de-beautee.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Visage et Beauté</Text>
      </TouchableOpacity>
      {/* //  */}
      <TouchableOpacity
        style={styles.card}
        onPress={() => props.navigation.navigate("Scanimaux")}
      >
        <Image
          source={require("../../assets/iconCategories/animal-track.png")}
          style={{ width: "100%", height: "80%", resizeMode: "contain" }}
        />
        <Text style={styles.text}>Animaux</Text>
      </TouchableOpacity>
    </View>
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
    margin: 10,
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
export default Categories;
