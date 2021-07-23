import React, { Fragment } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Inscription = () => {
  const {
    container,
    text,
    logoUser,
    label,
    boxInputR,
    boxInputC,
    textInput,
    textInputC,
    labelTel,
    textInput216,
    textInput216Right,
  } = styles;
  return (
    <Fragment>
      <View style={container}>
        <View style={logoUser}>
          <Ionicons name="person-circle" size={90} color="green" />
        </View>
        <Text style={text}>Créer un nouveau compte client</Text>
        <View style={boxInputR}>
          <Text style={label}> Nom </Text>
          <Text style={label}> Prénom </Text>
        </View>
        <View style={boxInputR}>
          <TextInput
            style={textInput}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="Nom de famille"
          />
          <TextInput
            style={textInput}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="Votre prénom"
          />
        </View>
        <View style={boxInputC}>
          <Text style={label}>Adresse e-mail</Text>
          <TextInput
            style={textInputC}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="prenom_nom@gmail.com"
          />
        </View>
        <View style={boxInputC}>
          <Text style={label}>Mot de passe</Text>
          <TextInput
            style={textInputC}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="Au moins 6 caractères"
          />
        </View>
        <View style={boxInputR}>
          <Text style={labelTel}> Numéro de téléphone </Text>
        </View>
        <View style={boxInputR}>
          <TextInput
            style={textInput216}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="+216"
          />
          <TextInput
            style={textInput216Right}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="12345678"
          />
        </View>
      </View>
    </Fragment>
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
    textAlign: "center",
  },
  logoUser: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "8%",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "50%",
  },
  labelTel: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "50%",
    width: "100%",
  },
  boxInputR: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "25%",
    marginTop: "5%",
    marginLeft: "7%",
  },
  boxInputC: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: "25%",
    marginTop: "5%",
    marginLeft: "7%",
  },

  textInput: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    textAlign: "center",
    width: "53%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginRight: "15%",
    borderRadius: 10,
    marginTop: -13,
  },
  textInputC: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    textAlign: "center",
    width: "130%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginRight: "15%",
    borderRadius: 10,
    marginTop: 5,
  },
  textInput216: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    textAlign: "center",
    width: "26%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginRight: "6%",
    borderRadius: 10,
    marginTop: -10,
  },
  textInput216Right: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    textAlign: "center",
    width: "100%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginRight: "6%",
    borderRadius: 10,
    marginTop: -10,
  },
});

export default Inscription;
