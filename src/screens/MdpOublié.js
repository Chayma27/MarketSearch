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
    textReinit,
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
        <View>
        <Text style={textReinit}>Pour réinitialiser votre mot de passe, saisissez votre adresse e-mail ci-dessous</Text>
        </View>
        </View>
      </Fragment>
    );
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EFF1F8',
      flexDirection: 'column',
    },

    statusBar: {
      backgroundColor: '#0c7a1e',
      height: '5%',
      marginTop: '6%',
    },
    textBar: {
      color: 'white',
      fontSize: 21,
      fontWeight: '600',
      textAlign: 'center',
      marginTop: '1%',
    },
    ResetPasswoard: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '8%',
      },
    text: {
    fontSize: 26,
    color: 'black',
    textAlign: 'center',
      },
    textReinit: {
    fontSize: 22,
    color: '#687089',
    marginTop: '10%',
    marginLeft: '3%',
    },   
    
    
});

export default MdpOublié;