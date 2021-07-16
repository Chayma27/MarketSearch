import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  return (
    <Fragment>
      <View style={styles.statusBar}>
        <Text style={styles.textBar}>Connexion </Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.Text}>Identifiez-vous </Text>
        <StatusBar style="auto" />
        <View style={styles.containerInput}>
          <FontAwesome
            style={styles.userIcon}
            name="user"
            size={30}
            color="#3B3636"
          />
          <TextInput
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "900" }}
            autoCompleteType="off"
            placeholder="Identifiant *"
            style={styles.textInput}
          />
          <FontAwesome5
            style={styles.keyIcon}
            name="key"
            size={30}
            color="#3B3636"
          />
          <TextInput
            autoCorrect={false}
            autoCompleteType="off"
            placeholderTextColor="#aaaaaa"
            autoCompleteType="password"
            textContentType="password"
            secureTextEntry={true}
            placeholder="Mot de passe *"
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity style={styles.VButton}>
          <Text style={styles.textButton}>Se connecter</Text>
        </TouchableOpacity>
        <View style={styles.Vlink}>
          <Text style={styles.link}>Créer un compte</Text>
          <Text style={styles.link}> Mot de passe oublié ? </Text>
        </View>
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
  containerInput: {
    marginTop: 30,
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    height: 70,
    borderColor: "#c6c6c6",
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: "4%",
    backgroundColor: "white",
    fontSize: 22,
    color: "black",
    paddingLeft: "15%",
  },
  VButton: {
    backgroundColor: "#3f9d2f",
    width: "75%",
    marginHorizontal: "14%",
    marginVertical: "6%",
    height: 70,
    fontSize: 30,
    borderRadius: 30,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    marginTop: 21,
    fontSize: 25,
    fontWeight: "700",
  },
  Vlink: {
    alignItems: "center",
    marginVertical: "10%",
  },
  link: {
    color: "#2b7bd6",
    fontSize: 25,
    marginBottom: 17,
    fontWeight: "600",
  },
  userIcon: {
    position: "absolute",
    marginTop: 27,
    marginLeft: "8%",
    fontSize: 48,
    zIndex: 2,
  },
  keyIcon: {
    position: "absolute",
    marginTop: 135,
    marginLeft: "8%",
    fontSize: 40,
    zIndex: 2,
  },
});
