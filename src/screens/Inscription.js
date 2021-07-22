import React from "react";
import { Text, View, StyleSheet } from "react-native";

const Inscription = () => {
  return (
    <View style={styles.Container}>
      <Text> Créer un nouveau compte client</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    textAlign: "center",
  },
});

export default Inscription;
