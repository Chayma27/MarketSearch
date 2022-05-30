
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

import { Button } from "react-native-elements";

const CardMesFavoris = (props) => {

  return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 10}}>
    <View style={{ backgroundColor: "white", borderRadius: 10, overflow: 'hidden' }}>
      <View style={{ height: 130, width: 160, overflow: 'hidden' }}>
        <Image
          source={props.path} // appel chemin image path 
          style={{
            width: '100%',
            height : '100%',
            resizeMode : 'cover'
          }}
        />
      </View>
      <View style={{ padding: 30, width: 150, marginBottom : 10 }}>
        <Text style ={{color: "black" , fontWeight : 'bold' , fontSize : 16 , textAlign : 'center'}}>{props.Titre}</Text> 
        <View style={{flexDirection : 'row' , justifyContent: 'space-between'}}>
        <Text style ={{color: "#777", textAlign : 'center'}}>{props.prix}</Text>
        <Text style ={{color: "#777", textAlign : 'center'}}>{props.prix}</Text>
        </View>
        <View>

        </View>
     
      </View>
      
      
    </View>
  </View>
  )
}

export default CardMesFavoris;