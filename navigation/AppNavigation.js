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
import MesCommandes from "../src/screens/MesCommandes";
import MesArticles from "../src/screens/MesArticles";
import Mesfavoris from "../src/screens/Mesfavoris";
import Us from "../src/screens/Us";
import AdminEspace from "../src/screens/AdminEspace";
import DashboardAdmin from "../src/screens/admin/DashboardAdmin"
import User from "../src/screens/admin/User"
import Annonces from "../src/screens/admin/Annonces"
import Mesinfos from "../src/screens/MesInfos";
import Scmode from "../src/screens/S_catg/Scmode";
import Scanimaux from "../src/screens/S_catg/Scanimaux";
import Scloisir from "../src/screens/S_catg/ScLoisir";
import Scmaison from "../src/screens/S_catg/Scmaison";
import Scmultimedia from "../src/screens/S_catg/Scmultimedia";
import Scsport from "../src/screens/S_catg/Scsport";
import Scvisage from "../src/screens/S_catg/Scvisage";
import Scvehicule from "../src/screens/S_catg/Scvehicule";
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
      tabBarLabelStyle : { 
        fontSize : 13
      }
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
      <Stack.Screen name="MesCommandes" component={MesCommandes} options={{  title : 'Mes commandes'}}/>
      <Stack.Screen name="MesArticles" component={MesArticles} options={{  title : 'Mes articles'}} />
      <Stack.Screen name="MesInfos" component={Mesinfos} options={{  title : 'Mes informations'}} />
      <Stack.Screen name="MesFavoris" component={Mesfavoris} options={{  title : 'Mes favoris'}} />
      <Stack.Screen name="Us" component={Us} options={{  title : 'Qui sommes nous'}} />
      <Stack.Screen name="Scmode" component={Scmode} options={{  title : 'Mode'}} />
      <Stack.Screen name="Scmaison" component={Scmaison} options={{  title : 'Maison et cuisine'}} />
      <Stack.Screen name="Scvehicule" component={Scvehicule} options={{  title : 'Véhicule'}} />
      <Stack.Screen name="Scmultimedia" component={Scmultimedia} options={{  title : 'Multimedia'}} />
      <Stack.Screen name="Scloisir" component={Scloisir} options={{  title : 'Loisir'}} />
      <Stack.Screen name="Scsport" component={Scsport} options={{  title : 'Sport'}} />
      <Stack.Screen name="Scvisage" component={Scvisage} options={{  title : 'Visage et Beauté'}} />
      <Stack.Screen name="Scanimaux" component={Scanimaux} options={{  title : 'Animaux'}} />
      <Stack.Screen name="adminEspace" component={AdminEspace} options={{  title : 'Espace Administrateur'}} />
      <Stack.Screen name="DashboardAdmin" component={DashboardAdmin} options={{  title : 'Dashboard Admin'}} />
    </Stack.Navigator>
  </NavigationContainer>
  );
};

export default AppNavigation;
