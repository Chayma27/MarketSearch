import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const Connexion = (props) => {
  const {
    container,
    text,
    containerInput,
    userIcon,
    keyIcon,
    VButton,
    textButton,
    Vlink,
    link,
    textInput,
  } = styles;
  return (
    <Fragment>
      <View style={container}>
        <KeyboardAwareScrollView>
          <Text style={text}>Identifiez-vous </Text>
          <StatusBar style="auto" />
          <View style={containerInput}>
            <FontAwesome
              style={userIcon}
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
              style={keyIcon}
              name="key"
              size={30}
              color="#3B3636"
            />
            <TextInput
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry={true}
              placeholder="Mot de passe *"
              style={textInput}
            />
          </View>
          <TouchableOpacity
            style={VButton}
            onPress={() => props.navigation.navigate("Home")}
          >
            <Text style={textButton}>Se connecter</Text>
          </TouchableOpacity>
          <View style={Vlink}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Inscription")}
            >
              <Text style={link}>Créer un compte</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("MdpOublie")}
            >
              <Text style={link}> Mot de passe oublié ? </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8",
    flexDirection: "column",
    marginTop: '-25%',
  },
  text: {
    fontSize: 28,
    color: "black",
    fontWeight: "700",
    marginTop: "40%",
    marginLeft: "2%",
  },
  containerInput: {
    marginTop: 40,
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
    marginVertical: "10%",
    height: 75,
    fontSize: 30,
    borderRadius: 30,
  },
  textButton: {
    color: "white",
    textAlign: "center",
    marginTop: 19,
    fontSize: 25,
    fontWeight: "700",
  },
  Vlink: {
    alignItems: "center",
    marginVertical: "6%",
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

export default Connexion;
