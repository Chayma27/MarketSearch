import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
TouchableOpacity
} from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import CardView from "react-native-cardview";
const Categories = (props) => {

  return (
    <ScrollView>
    <View style={styles.container}>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/clothes.png')}
            style={{ width: "100%", height: "35%",    resizeMode: 'contain' }}
          />

          <Text style={styles.text}>Mode</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/car.png')}
            style={{ width: "100%", height: "35%",resizeMode: 'contain' }}
          />
          <Text style={styles.text}>Véhicules</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/house-decoration.png')}
            style={{ width: "100%", height: "35%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Maison & cuisine</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/produits-de-beaute.png')}
            style={{ width: "100%", height: "35%" , resizeMode : 'contain' }}
          />
          <Text style={styles.text}>Visage et Beauté</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/loisir.png')}
            style={{ width: "100%", height: "35%", resizeMode : "contain" }}
          />
          <Text style={styles.text}>Loisir</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/sport.png')}
            style={{ width: "100%", height: "35%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Sport</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/electronic-device.png')}
            style={{ width: "100%", height: "35%" , resizeMode : "contain" }}
          />
          <Text style={styles.text}>Multimédia</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={require('../../assets/iconCategories/animal-track.png')}
            style={{ width: "100%", height: "35%" , resizeMode : "contain" }}
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
  },
  
  card: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent : "center",
    margin: 8,
    width : '43%'
  },
  text: {
    textAlign: "center",
    justifyContent : "flex-end",
    marginVertical : "5%",
    fontWeight : "bold",
    fontSize : 17
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 10,
  },
});
export default Categories;
