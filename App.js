import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <Fragment>
      <View style={styles.statusBar}>
        <Text style={styles.textBar}>Connexion</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Text}>Identifiez-vous </Text>
        <StatusBar style="auto" />
      </View>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8",
    flexDirection: "column",
  },
  Text: {
    fontSize: 28,
    color: "black",
    fontWeight: "700",
    marginTop: "40%",
    marginLeft: "2%",
  },
  statusBar: {
    backgroundColor: "#0c7a1e",
    height: "5%",
    marginTop: "7.6%",
  },
  textBar: {
    color: "white",
    fontSize: 22,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "2%",
  },
});
