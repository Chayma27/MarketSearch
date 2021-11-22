
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

import { Button } from "react-native-elements";

const CardAnnonces = (props) => {

  return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center" , backgroundColor: "#eee" , marginHorizontal: 10}}>
    <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: 'hidden' }}>
      <View style={{ height: 300, width: 250, overflow: 'hidden' }}>
        <Image
          source={props.path}
          style={{
            width: '100%',
            height : '100%',
            resizeMode : 'cover'
          }}
        />
      </View>
      <View style={{ padding: 10, width: 250 }}>
        <View style={{flexDirection : 'row' , justifyContent: 'space-between'}}>
        <Text style ={{color: "black" , fontWeight : 'bold' , fontSize : 16}}>{props.Titre}</Text>
        <Text style ={{color: "#777"}}>{props.prix}</Text>
        </View>
        <Text style={{ color: "#777", paddingTop: 5 }}>
       {props.description}
        </Text>
      </View>
      <Button
  title="Consulter l'annonce"
/>
    </View>
  </View>
  )
}

export default CardAnnonces;