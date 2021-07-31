import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import {
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
          <Text style={textBar}>Connexion</Text>
        </View>
        <View style={container}>
          <Text style={text}>Identifiez-vous </Text>
          <StatusBar style="auto" />
          <View style={containerInput}>
            <FontAwesome style={userIcon} name="user" size={30} color="#3B3636" />
            <TextInput
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              placeholderStyle={{ fontWeight: "900" }}
              autoCompleteType="off"
              placeholder="Identifiant *"
              style={styles.textInput}
            />
            <FontAwesome5 style={keyIcon} name="key" size={30} color="#3B3636" />
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
          <TouchableOpacity style={VButton}>
            <Text style={textButton}>Se connecter</Text>
          </TouchableOpacity>
          <View style={Vlink}>
            <Text style={link}>Créer un compte</Text>
            <Text style={link}> Mot de passe oublié ? </Text>
          </View>
        </View>
      </Fragment>
    );
  };