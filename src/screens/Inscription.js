import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Inscription = () => {
  const { container, text } = styles;
  return (
    <View style={container}>
      <Text style={text}>Créer un nouveau compte client</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8", // EFF1F8
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: "29%",
    textAlign: "center",
  },
});

export default Inscription;
