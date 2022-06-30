import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import Carousel from "simple-carousel-react-native";

const GererCategorie = (props) => {
  const image = require("../../../assets/background-image-admin.jpeg");
  const handleUser = () => { 
    props.navigation.navigate("User")
  }

  const handleAnnonces = () => { 
    props.navigation.navigate("Annonces")
  }
  const handleSousCategories = () => { 
    props.navigation.navigate("AdminSousCategories")

  }
  const handleCategories = () => {
    props.navigation.navigate("AdminCategories")
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Carousel
            backgroundColor="transparent"
            showScroll={false}
            showBubbles={true}
          >
          
            <TouchableOpacity
              onPress={handleCategories}
            >
              <Image
                style={{ width: 300, height: 300, marginLeft: "10%" }}
                source={require("../../../assets/categ.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                Gérer les catégories
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={handleSousCategories}
             >
              <Image
                style={{ width: 300, height: 300, marginLeft: "10%" }}
                source={require("../../../assets/sCtg.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                Gérer les sous catégories
              </Text>
            </TouchableOpacity>

           
          </Carousel>
        </View>
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
    justifyContent: "center",
  },
});

export default GererCategorie;
