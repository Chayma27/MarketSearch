import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  SafeAreaView,
  Slider,
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import CardView from "react-native-cardview";
const Categories = (props) => {

  return (
    <ScrollView>
    <View style={styles.container}>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/clothes.png')}
            style={{ width: "100%", height: "25%",    resizeMode: 'contain' }}
          />

          <Text style={styles.text}>Vêtements</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/car.png')}
            style={{ width: "100%", height: "25%",resizeMode: 'contain' }}
          />
          <Text style={styles.text}>Véhicules</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/house-decoration.png')}
            style={{ width: "100%", height: "25%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Décor</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/produits-de-beaute.png')}
            style={{ width: "100%", height: "25%" , resizeMode : 'contain' }}
          />
          <Text style={styles.text}>Santé et Beauté</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/sac-a-main.png')}
            style={{ width: "100%", height: "25%", resizeMode : "contain" }}
          />
          <Text style={styles.text}>Bagages et sacs</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/sport.png')}
            style={{ width: "100%", height: "25%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Sport</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/settings.png')}
            style={{ width: "100%", height: "25%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Pièces et outils</Text>
        </CardView>
        <CardView
          cardElevation={1}
          // cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/animal-track.png')}
            style={{ width: "100%", height: "25%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Animaux</Text>
        </CardView>
        
        
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap : 'wrap',
    paddingTop: -20, 
    justifyContent: "space-around",

    // backgroundColor: '#EEEEEE',
  },
  
  card: {
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    margin: 5,
    width : '43%'
  },
  text: {
    textAlign: "center",
    // height: 75,
    marginVertical : "15%",
    fontWeight : "bold"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
export default Categories;
