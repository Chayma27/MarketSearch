import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput, } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";


const Home = (props) => {
  return (
    <View style= {styles.container}>
            <KeyboardAwareScrollView>

      <View style={styles.headerStyle1}>
      <View style = { styles.header}>
      <Image style={styles.tinyLogo} source={require('../../assets/logo.png')} />
     {/* <Text style = {styles.appName}>L</Text> */}
      <Text style = {styles.appName}>Market Search</Text>
      {/* <Text style = {styles.appName}>P</Text> */}
      <Ionicons name="cart-sharp" size={40} color="black" />
      </View>
      {/* <Text style = {styles.appName}>Input</Text> */}
      <View style={styles.boxInputR}>
            <TextInput
              style={styles.textInput}
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              placeholderStyle={{ fontWeight: "500" }}
              autoCompleteType="off"
              placeholder="Nom de famille"
            />
        </View>
      </View>

      <View>
        <Text style={styles.newsArtcl}>Ajout récents</Text>
      </View>
      </KeyboardAwareScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1 , // remplis toute la page 

  },
  headerStyle1: { 
    backgroundColor: '#cce4ff'

  },
  header : { 
    flexDirection:'row',
    justifyContent: 'space-between',
    marginTop : '5%', 
    marginLeft : '3%',
    marginRight: '3%',
  },
  appName : { 
    fontSize : 28, 
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  newsArtcl: { 
    fontSize: 28, 
    color: '#008b8b', 
    marginTop : '5%', 
    marginLeft : '3%',
  },
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 50
  },
  boxInputR: {
    flexDirection: "row",
    justifyContent: "center",
  },
  textInput: {
    borderWidth: 2,
    height: 50,
    borderColor: "#c6c6c6",
    width: "85%",
    paddingLeft: "5%",
    backgroundColor: "white",
    fontSize: 18,
    color: "black",
    fontWeight: "bold",
    borderRadius: 10,
    marginTop: 20,
  },
});
export default Home;
