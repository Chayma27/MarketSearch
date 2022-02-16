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
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />

          <Text style={styles.text}>Elevation 0</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />
          <Text style={styles.text}>Elevation 1</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />
          <Text style={styles.text}>Elevation 2</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />
          <Text style={styles.text}>Elevation 3</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />
          <Text style={styles.text}>Elevation 4</Text>
        </CardView>
        <CardView
          cardElevation={1}
          cardMaxElevation={1}
          cornerRadius={5}
          style={styles.card}
        >
          <Image
            source={{ uri: "https://reactjs.org/logo-og.png" }}
            style={{ width: "100%", height: "25%" }}
          />
          <Text style={styles.text}>Elevation 5</Text>
        </CardView>
        
    </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap : 'wrap',
    paddingTop: 30, 
    justifyContent: "space-around",

    // backgroundColor: '#EEEEEE',
  },
  
  card: {
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    margin: 10,
    width : '40%'
  },
  text: {
    textAlign: "center",
    // height: 75,
    marginVertical : "15%"
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
export default Categories;
