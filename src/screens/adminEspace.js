import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
} from "react-native";
import { Button } from 'react-native-elements';

const adminEsapce = (props) => {
  const image = require("../../assets/background-image-admin.jpeg");
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text style={styles.text}> ESPACE ADMIN </Text>
        <View
          style={{
            marginTop: "35%",
            width: "95%",
            justifyContent: "center",
            marginLeft: "2%",
          }}
        >
          <TextInput
            style={styles.inputUnderLine}
            placeholder="Email"
            // onChangeText={(username) => this.setState({ username })}
            // onSubmitEditing={(username) => this.setState({ username })}
            // value={this.state.username}
          />
          <TextInput
            style={styles.inputUnderLine}
            placeholder="Mot de passe"
            // onChangeText={(username) => this.setState({ username })}
            // onSubmitEditing={(username) => this.setState({ username })}
            // value={this.state.username}
          />
        </View>
        <Button title="Accéder" type="solid" style={{marginTop: '5%',  width: "95%",
            justifyContent: "center",
            marginLeft: "2%",}} />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  text: {
    color: "white",
    fontSize: 40,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
    marginTop: "35%",
  },
  inputUnderLine: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "grey",
    padding: 10,
    fontSize: 20,
    marginVertical: "2%",
    borderRadius: 5,
    textAlign: "center",
  },
});

export default adminEsapce;