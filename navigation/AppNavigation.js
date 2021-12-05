import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Text, View } from 'react-native';
import Connexion from "../src/screens/Connexion";
import Inscription from "../src/screens/Inscription";
import MdpOublie from "../src/screens/MdpOublie";
import Home from "../src/screens/Home";
import NouveauMdp from "../src/screens/NouveauMdp";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function Menu() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Accueil" component={Accueil} />
    <Tab.Screen name="Categories" component={Categories} />
    <Tab.Screen name="addProduct" component={addProduct} />
    <Tab.Screen name="myAccount" component={myAccount} />
  </Tab.Navigator>
  )
}
function Accueil() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Accueil</Text>
    </View>
  );
}

function Categories() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Categories</Text>
    </View>
  );
}

function addProduct() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajouter Produit</Text>
    </View>
  );
}

function favoris() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Favoris</Text>
    </View>
  );
}
function myAccount() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mon compte</Text>
    </View>
  );
}

const AppNavigation = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Menu" component={Menu} />

        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="MdpOublie" component={MdpOublie} />
        <Stack.Screen name="NouveauMdp" component={NouveauMdp} />
      </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigation;
