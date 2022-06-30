import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Image, Touchable, TouchableOpacity, Platform } from "react-native";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import { PricingCard } from "react-native-elements";
import * as ImagePicker from 'expo-image-picker';



import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const Admin_Ctg = (props) => {
  const [number, onChangeNumber] = React.useState(null);
  const [text, onChangeText] = React.useState("0");
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
 
  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            {" "}
            Nom de la catégorie {" "}
          </Text>
          <Input placeholder="Merci de saisir le nom fsd" />
      
        </Card>

        {/* Image function add database */}

        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Ajouter une photo pour votre nouvelle catégorie
          </Text>
          <TouchableOpacity style={{alignItems: 'center'}} onPress={pickImage}>
          <Image style={styles.resizePicture} source={require('../../../assets/add-photo.png')} />
          </TouchableOpacity>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </View>
        </Card>
        <Card>
       
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: "5%",
            }}
          >
          </View>
          <Button
            title="Créer la catégorie"
            buttonStyle={{ backgroundColor: "#4f9deb" }}
          />
        </Card>
      
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: "bold",
    color: "#43484D",
    paddingBottom: "3%",
    marginTop: "1%",
  },
  input: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
  },
  resizePicture : { 
    width: 150,
    height: 150,
  }
});
export default Admin_Ctg;
