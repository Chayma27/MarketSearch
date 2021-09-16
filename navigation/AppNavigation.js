import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Connexion from "../src/screens/Connexion";
import Inscription from "../src/screens/Inscription";
import MdpOublie from "../src/screens/MdpOublie";
import Home from "../src/screens/Home";
const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Connexion" component={Connexion} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
