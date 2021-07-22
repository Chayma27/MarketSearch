import React, { Fragment } from "react";
import { Text, View, StyleSheet,TextInput } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

const Inscription = () => {
  const { container, text,logoUser,label,boxInput,textInput } = styles;
  return (
    <Fragment>
  
    <View style={container}>
    <View style={logoUser}> 
      <Ionicons name="person-circle" size={90} color="green" />
    </View>
      <Text style={text}>Créer un nouveau compte client</Text>
    <View style={boxInput}>
      <Text style= {label}> Nom </Text>
      <Text style= {label}> Prénom </Text>
    </View>
    <View style={boxInput}>
    {/* <TextInput style={textInput}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "900" }}
            autoCompleteType="off"
            placeholder="Nom de la famille"
          />
             <TextInput style={textInput}
            autoCorrect={false}
            placeholderTextColor="#aaaaaa"
            placeholderStyle={{ fontWeight: "900" }}
            autoCompleteType="off"
            placeholder="Votre prénom"
          />    */}
    </View>
 
    </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF1F8", // EFF1F8
  },
  text: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
logoUser: {
  flexDirection : "row",
  justifyContent : "center",
  marginTop: "8%"
},
label:
{
fontSize : 20,
fontWeight : 'bold',
},
boxInput :
{
  flexDirection : 'row',
  justifyContent : 'flex-start',
  marginHorizontal :'25%',
  marginTop : '5%',
  marginLeft : '12%',
},

textInput :
{
  borderWidth: 2,
  height: 50,
  borderColor: "#c6c6c6",
  width: "40%",
  backgroundColor: "white",
  fontSize: 18,
  color: "black",
},
});

export default Inscription;
