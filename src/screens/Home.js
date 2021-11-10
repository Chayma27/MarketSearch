import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Home = (props) => {
  return (
    <View style= {styles.container}>
      <Text style = {styles.bienvenue}>Bienvenue Arfaoui Chayma</Text>
      <Text>Quoi de neuf pour Aujourd'hui !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex : 1 , 
    backgroundColor : 'white',
    marginTop : '5%', 
    marginLeft : '3%'
  },
  bienvenue : { 
    fontSize : 17, 
    fontWeight: 'bold'
  }
});
export default Home;
