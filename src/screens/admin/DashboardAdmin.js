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

const DashboardAdmin = (props) => {
  const image = require("../../../assets/background-image-admin.jpeg");
  const handleUser = () => { 
    props.navigation.navigate("User")
  }

  const handleAnnonces = () => { 
    props.navigation.navigate("Annonces")
  }
  const handleLogOut = () => { 
    props.navigation.navigate("Connexion")

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
              onPress={handleUser}
            >
              <Image
                style={{ width: 300, height: 300, marginLeft: "10%" }}
                source={require("../../../assets/banned-user.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                Gérer les utilisateurs
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={handleAnnonces}
             >
              <Image
                style={{ width: 300, height: 300, marginLeft: "10%" }}
                source={require("../../../assets/panier.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                Gérer les annonces
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={handleLogOut}
            >
              <Image
                style={{ width: 300, height: 300, marginLeft: "10%" }}
                source={require("../../../assets/logout.png")}
              />
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginTop: "5%",
                }}
              >
                Se déconnecter
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

export default DashboardAdmin;
