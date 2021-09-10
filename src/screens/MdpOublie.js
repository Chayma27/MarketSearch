import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const MdpOublie = () => {
  const {
    ResetPasswoard,
    statusBar,
    textBar,
    text,
    textReinit,
    containerInput,
    mail,
    send,
    VButton,
    textButton,
    Vlien,
    lien,
  } = styles;
  return (
    <View>
      <View style={statusBar}>
        <Text style={textBar}> Réinitialisation du mot de passe</Text>
      </View>
      <View style={ResetPasswoard}>
        <MaterialCommunityIcons name="lock-reset" size={130} color="black" />
      </View>
      <View>
        <Text style={text}>Vous avez oublié votre mot de passe ?</Text>
      </View>
      <View>
        <Text style={textReinit}>
          Pour réinitialiser votre mot de passe, saisissez votre adresse e-mail
          ci-dessous
        </Text>
      </View>
      <StatusBar style="auto" />
      <View style={containerInput}>
        <Ionicons style={mail} name="mail" size={24} color="black" />
        <TextInput
          autoCorrect={false}
          placeholderTextColor="#aaaaaa"
          placeholderStyle={{ fontWeight: "900" }}
          autoCompleteType="off"
          placeholder=" Adresse e-mail"
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity style={VButton}>
        <MaterialIcons style={send} name="send" size={30} color="white" />
        <Text style={textButton}>Envoyer</Text>
      </TouchableOpacity>
      <View style={Vlien}>
        <TouchableOpacity>
          <Text style={lien}>Contactez-nous</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8",
    flexDirection: "column",
  },
  statusBar: {
    backgroundColor: "#0c7a1e",
    height: "5%",
    marginTop: "6%",
  },
  textBar: {
    color: "white",
    fontSize: 21,
    fontWeight: "600",
    textAlign: "center",
    marginTop: "1%",
  },
  ResetPasswoard: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "8%",
  },
  text: {
    fontSize: 26,
    color: "black",
    textAlign: "center",
  },
  textReinit: {
    fontSize: 22,
    color: "#687089",
    marginTop: "10%",
    marginLeft: "3%",
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
    paddingLeft: "15%",
  },
  mail: {
    position: "absolute",
    marginTop: 27,
    marginLeft: "8%",
    fontSize: 48,
    zIndex: 2,
  },
  send: {
    position: "absolute",
    marginTop: 10,
    marginLeft: "8%",
    fontSize: 50,
    zIndex: 2,
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
    marginTop: 19,
    fontSize: 25,
    fontWeight: "700",
  },
  Vlien: {
    alignItems: "center",
    marginVertical: "10%",
  },
  lien: {
    color: "#2b7bd6",
    fontSize: 22,
    fontWeight: "600",
  },
});

export default MdpOublie;
