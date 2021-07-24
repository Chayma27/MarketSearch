import React, { Fragment, useState } from "react";
import { Text, View, StyleSheet, TextInput, CheckBox } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Inscription = () => {
  const [isSelectedF, setSelectionF] = useState(false);
  const [isSelectedH, setSelectionH] = useState(false);

  const {
    container,
    text,
    logoUser,
    label,
    boxInputR,
    boxInputC,
    textInput,
    textInputC,
    labelMail,
    labelTel,
    textInput216,
    textInput216Right,
    radioButton,
    Vlink,
    link,
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
          <Text style={labelMail}>Adresse e-mail</Text>
          <TextInput
            style={textInputC}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "500" }}
            autoCompleteType="off"
            placeholder="Prenom_nom@gmail.com"
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
        <View style={radioButton}>
          <CheckBox value={isSelectedF} onValueChange={setSelectionF} />
          <Text style={label}> Femme </Text>
          <CheckBox value={isSelectedH} onValueChange={setSelectionH} />
          <Text style={label}> Homme </Text>
        </View>

        <View style={Vlink}>
          <Text style={link}>Already have an account ? Sign in</Text>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8",
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
  labelMail: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: "50%",
    width: "100%",
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
    width: "55%",
    paddingLeft: "5%",
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
    width: "125%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
    marginTop: 5,
  },
  textInput216: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    width: "32%",
    paddingLeft: "5%",
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
    width: "87%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    marginRight: "6%",
    borderRadius: 10,
    marginTop: -10,
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginHorizontal: "45%",
    marginTop: "5%",
    marginLeft: "9%",
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
});

export default Inscription;
