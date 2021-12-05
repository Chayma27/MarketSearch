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
function AddProduct() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Ajouter Produit</Text>
    </View>
  );
}
function MyAccount() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Mon Compte</Text>
    </View>
  );
}

function HomeTabs() {
  return (
    <Tab.Navigator>
      {/* <Tab.Screen name="Home" component={Home} /> */}
      <Tab.Screen name="Accueil" component={Accueil} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="AddProduct" component={AddProduct} />
      <Tab.Screen name="MyAccount" component={MyAccount} />
    </Tab.Navigator>
  );
}
const AppNavigation = () => {

  return (
    <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Connexion" component={Connexion} />
      <Stack.Screen name="Home" component={HomeTabs} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="MdpOublie" component={MdpOublie} />
      <Stack.Screen name="NouveauMdp" component={NouveauMdp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigation;
