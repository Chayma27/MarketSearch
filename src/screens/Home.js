import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = (props) => {
  return (
    <View style= {styles.container}>
      <View style={styles.headerStyle1}>

      <View style = { styles.header}>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      <Text style = {styles.bienvenue}>Market Search</Text>
      </View>
      </View>

      <View>
        <Text style={styles.newsArtcl}>Ajout récents</Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1 , 

  },
  headerStyle1: { 
    backgroundColor: '#00ffff'

  },
  header : { 
    marginTop : '5%', 
    marginLeft : '3%',
  },
  bienvenue : { 
    fontSize : 28, 
    fontWeight: 'bold',
    textAlign: 'center'
  }, 
  newsArtcl: { 
    fontSize: 28, 
    color: '#008b8b', 
    marginTop : '5%', 
    marginLeft : '3%',
  }
});
export default Home;
