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
      logoUser,
      statusBar,
      textBar,
    } = styles;
    return (
      <Fragment>
        <View style={statusBar}>
          <Text style={textBar}> Réinitialisation du mot de passe</Text>
          <View style={logoUser}>
          <MaterialCommunityIcons name="lock-reset" size={130} color="black" />
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
    logoUser: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: "8%",
      },
});

export default MdpOublié;