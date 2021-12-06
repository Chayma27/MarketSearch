import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, View } from 'react-native';
import Connexion from "../src/screens/Connexion";
import Inscription from "../src/screens/Inscription";
import MdpOublie from "../src/screens/MdpOublie";
import NouveauMdp from "../src/screens/NouveauMdp";
import Home from "../src/screens/Home";
import Categories from "../src/screens/Categories";
import PublishAnnonce from "../src/screens/PublishAnnounce";
import MyAccount from "../src/screens/MyAccount";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused
            ? 'home-outline'
            : 'home-outline';
        } else if (route.name === 'Categories') {
          iconName = focused ? 'list-outline' : 'list-outline';
        }
        else if (route.name === 'PublishAnnounce') {
          iconName = focused ? 'add-circle-outline' : 'add-circle-outline';
        }
        else if (route.name === 'MyAccount') {
          iconName = focused ? 'person-outline' : 'person-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',  // sa quand tu click ou la page est affiche comme maint fi home
      tabBarInactiveTintColor: 'black', // sa grris par defaut 
    })}
    >
      <Tab.Screen name="Home" component={Home} options={{title : 'Home' }}  />
      <Tab.Screen name="PublishAnnounce" component={PublishAnnonce} options={{title : 'Publier Annonce'}} />
      <Tab.Screen name="Categories" component={Categories}  options={{  title : 'Categories'}} />
      <Tab.Screen name="MyAccount" component={MyAccount} options={{ title : 'Mon Compte'}} />
    </Tab.Navigator>
  );
}
const AppNavigation = () => {

  return (
    <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Connexion" component={Connexion} options={{headerLeft:()=> null}} />
      <Stack.Screen name="Home" component={HomeTabs} options={{headerLeft:()=> null , headerShown : false}} />
      <Stack.Screen name="Inscription" component={Inscription} />
      <Stack.Screen name="MdpOublie" component={MdpOublie} />
      <Stack.Screen name="NouveauMdp" component={NouveauMdp} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigation;
