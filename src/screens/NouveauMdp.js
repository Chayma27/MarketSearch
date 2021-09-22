import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
  } from "react-native";

  const NouveauMdp = () => {
    const {
    text,
    textNvMdp,
    containerInput,
    textInput,
    VButton,
    textButton,
    } = styles;
    return (
        <KeyboardAwareScrollView>
      <View>
        <View>
          <Text style={text}>
            Modifier mon mot de passe
          </Text>
        </View>
        <View>
          <Text style={textNvMdp}>
            Nouveau Mot de passe
          </Text>
        </View>
        <StatusBar style="auto" />
        <View style={containerInput}>
        <TextInput
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              autoCompleteType="password"
              textContentType="password"
              secureTextEntry={true}
              style={textInput}
            />
        </View>
        <TouchableOpacity 
        style={VButton}>
          <Text style={textButton}>Continuer</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
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
      textAlign : "center",
      color: "black",
      fontWeight: "700",
      marginTop: "20%",
    },
    textNvMdp: {
      fontSize: 22,
      marginTop: "20%",
      marginLeft: "3%",
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
      marginVertical: "-4%",
      backgroundColor: "white",
      fontSize: 22,
      color: "black",
      paddingLeft: "5%",
    },
    VButton: {
      backgroundColor: "#3f9d2f",
      width: "75%",
      marginHorizontal: "14%",
      marginVertical: "15%",
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
});

export default NouveauMdp;