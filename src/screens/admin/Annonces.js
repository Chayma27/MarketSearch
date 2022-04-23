import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";


const Annonces = (props) => {
  const image = require("../../../assets/background-image-admin.jpeg");

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}> Gestion des annonces </Text>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginTop: "15%",
  },
});

export default Annonces;
