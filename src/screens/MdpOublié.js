import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import {
    StyleSheet,
    Text,
    View,
  } from "react-native";
  
  const MdpOublié = () => {
    const {
      statusBar,
      textBar,
    } = styles;
    return (
      <Fragment>
        <View style={statusBar}>
          <Text style={textBar}> Réinitialisation du mot de passe</Text>
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
    text: {
      fontSize: 24,
      color: "black",
      fontWeight: "700",
      marginTop: "40%",
      marginLeft: "2%",
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
});

export default MdpOublié;