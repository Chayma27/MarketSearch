import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
  

  const MdpOublié = () => {
    const {
    ResetPasswoard,
    statusBar,
    textBar,
    text,
    } = styles;
    return (
      <Fragment>
        <View style={statusBar}>
          <Text style={textBar}> Réinitialisation du mot de passe</Text>
          <View style={ResetPasswoard}>
          <MaterialCommunityIcons name="lock-reset" size={130} color="black" />
          </View>
          <View>
        <Text style={text}>Vous avez oublié votre mot de passe ?</Text>
        </View>
        </View>
      </Fragment>
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
});

export default MdpOublié;