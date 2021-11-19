import React from "react";
import { View, Text, StyleSheet,Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';


const Home = (props) => {
  return (
    <View style= {styles.container}>
      <View style={styles.headerStyle1}>

      <View style = { styles.header}>
      <Image style={styles.tinyLogo} source={require('../../assets/logo.png')} />
     {/* <Text style = {styles.appName}>L</Text> */}
      <Text style = {styles.appName}>Market Search</Text>
      {/* <Text style = {styles.appName}>P</Text> */}
      <Ionicons name="cart-sharp" size={40} color="black" />
      </View>
      <Text style = {styles.appName}>Input</Text>
      </View>

      <View>
        <Text style={styles.newsArtcl}>Ajout récents</Text>
      </View>

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
  }
});
export default Home;
