import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";
import { Ionicons, FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Categories from "../components/home/Categories";
import { SearchBar } from "react-native-elements";
import { PricingCard } from "react-native-elements";

const Home = (props) => {
  const [search, setSearch] = useState("");

  const updateSearch = () => {
    setSearch(search);
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.headerStyle1}>
          <View style={styles.header}>
            <Image
              style={styles.tinyLogo}
              source={require("../../assets/logo.png")}
            />
            <Text style={styles.appName}>Market Search</Text>
            <Ionicons name="cart-sharp" size={40} color="black" />
          </View>
          {/* <SearchBar
            placeholder="Type Here..."
            onChangeText={updateSearch}
            value={search}
          /> */}
           
          <View style={styles.containerInput}>
            <TextInput
              autoCorrect={false}
              placeholderTextColor="#aaaaaa"
              placeholderStyle={{ fontWeight: "900" }}
              autoCompleteType="off"
              placeholder=" Rechercher"
              style={styles.textInput}
            />

            <Ionicons
              style={styles.search}
              name="search"
              size={24}
              color="black"
            />
            <Ionicons
              style={styles.camera}
              name="camera"
              size={24}
              color="black"
            />
          </View>
          <Categories />
        </View>

        <View>
          <Text style={styles.newsArtcl}>Ajout récents</Text>
        </View>
        <ScrollView horizontal={true}>
        <View style={styles.product}>
      <PricingCard style= {styles.card}
       color="#4f9deb"
       title="Mercedes Gla"
       price="45.000 $"
       info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ title: ' Contacter', icon: 'flight-takeoff' }}/>

      <PricingCard style= {styles.card}
       color="#4f9deb"
       title="TV SMART Samsung"
       price="400 $"
       info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ title: ' Contacter', icon: 'flight-takeoff' }}/>
      <PricingCard style= {styles.card}
       color="#4f9deb"
       title="IPHONE 12 pro Max"
       price="1241 $"
       info={['1 User', 'Basic Support', 'All Core Features']}
      button={{ title: ' Contacter', icon: 'flight-takeoff' }}/>
      </View>
      </ScrollView>

      </KeyboardAwareScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // remplis toute la page
  },
  card : { 
    width : "300",
    height: "400",
    position : 'absolute'
  },
  headerStyle1: {
    backgroundColor: "#cce4ff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "5%",
    marginLeft: "3%",
    marginRight: "3%",
  },
  appName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  newsArtcl: {
    fontSize: 28,
    color: "#008b8b",
    marginTop: "5%",
    marginLeft: "3%",
  },
  tinyLogo: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  containerInput: {
    marginTop: 30,
    position: "relative",
  },
  textInput: {
    borderWidth: 2,
    height: 60,
    borderColor: "#c6c6c6",
    width: "90%",
    marginHorizontal: "5%",
    backgroundColor: "white",
    fontSize: 22,
    paddingLeft: "15%",
    borderRadius: 20,
  },
  search: {
    position: "absolute",
    marginTop: 7,
    marginLeft: "8%",
    fontSize: 46,
    zIndex: 2,
  },
  camera: {
    position: "absolute",
    marginTop: 7,
    marginLeft: "80%",
    fontSize: 42,
    zIndex: 2,
  },
  tini : {
    width: 60,
    height: 60,
    borderRadius: 50,
    position :'relative',
  }, 
  product : { 
    flexDirection : 'row'
  }
});
export default Home;
