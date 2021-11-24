
import React from "react";
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from "react-native";

import { Button } from "react-native-elements";

const CardPromo = (props) => {

  return (
<View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginHorizontal: 10}}>
    <View style={{ backgroundColor: "#eee", borderRadius: 10, overflow: 'hidden' }}>
      <View style={{ height: 300, width: 250, overflow: 'hidden' }}>
        <Image
          source={props.path} // appel chemin image path 
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
        <Text style ={{color: "red" , textDecorationLine:'line-through'}}> {props.prix}</Text>
        </View>
        <Text style={{ color: "#777", paddingTop: 5 }}>
       {props.description} 
        </Text>
      </View>
      <View style={{ padding: 10, width: 250 , backgroundColor : '#AA6373' }}>
      <View style={{flexDirection : 'column' , justifyContent: 'center'}}>
          <Text style = {{fontWeight :'bold', color : '#F0F2A6', textAlign : 'center'}} >{props.soldeRemise} </Text>
          <Text style = {{fontWeight :'bold', color : '#F9F5FF', textAlign : 'center', fontSize : 32}} > {props.newPrice} </Text>
</View>
          </View>
      <Button
  title="Consulter l'annonce"
/>
    </View>
  </View>
  )
}

export default CardPromo;