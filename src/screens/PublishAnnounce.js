import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput, Image, Touchable, TouchableOpacity } from "react-native";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import { PricingCard } from "react-native-elements";
import * as ref_Annonce from "../utilitaires/Ref_Annonce";
import * as Ref_Mode from "../utilitaires/Ref_Mode";
import { Formik } from "formik";  
import DroplistVetF from "../components/droplistAnnonces/ModeDroplist/DroplistVetF";
import DroplistVetH from "../components/droplistAnnonces/ModeDroplist/DroplistVetH";
import DroplistVetEnf from "../components/droplistAnnonces/ModeDroplist/DroplistVetEnf";
import DroplistChauss from "../components/droplistAnnonces/ModeDroplist/DroplistChauss";
import DroplistSacBag from "../components/droplistAnnonces/ModeDroplist/DroplistSacBag";
import DroplistBijMontre from "../components/droplistAnnonces/ModeDroplist/DroplistBijMontre";
import DroplistVoiture from "../components/droplistAnnonces/VehiculeDroplist/DroplistVoiture";
import DroplistMoto from "../components/droplistAnnonces/VehiculeDroplist/DroplistMoto";
import * as ImagePicker from "expo-image-picker";
import { result } from "lodash";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const PublishAnnonce = (props) => {
  const [image, setImage] = useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [text, onChangeText] = React.useState("0");
  const [selectedCtg, setSelectedCtg] = useState("");
  const [selectedSCtg, setSelectedSCtg] = useState("");
  const ctg = ref_Annonce.ctg;
  const Mode = ref_Annonce.Mode;
  const Maison_Cuisine = ref_Annonce.Maison_Cuisine;
  const Vehicule = ref_Annonce.Vehicule;
  const Multimedia = ref_Annonce.Multimedia;
  const Loisir = ref_Annonce.Loisir;
  const Sport = ref_Annonce.Sport;
  const Visage_Beaute = ref_Annonce.Visage_Beaute;
  const Animaux = ref_Annonce.Animaux;


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
  const SctgCallBack = () => {
    switch (selectedCtg) {
      case "Mode":
        return Mode;
        break;
      case "Maison & Cuisine":
        return Maison_Cuisine;
        break;
      case "Véhicule":
        return Vehicule;
        break;
      case "Multimédia":
        return Multimedia;
        break;
      case "Loisir":
        return Loisir;
        break;
      case "Sport":
        return Sport;
        break;
      case "Visage et Beauté":
        return Visage_Beaute;
        break;
      case "Animaux":
        return Animaux;
        break;
      default:
        break;
    }
  };
  return (
    <Formik
    initialValues={{ titre: "", description : ""  }}
    onSubmit={(values) => {
      values['uri_image'] = image;
      values['categorie'] = selectedCtg;
      values['sous_categorie'] = selectedSCtg;
      values['prix'] = text;
      if (selectedCtg=='Mode')
       {
        values['tailleVetement'] = 'XXL';
        // delete ceux de l'autre categorie 
        delete values['moteur'];

       } else if (selectedCtg == 'Véhicule'){
        values['moteur'] = 'Diesel';
        // delete ceux de l'autre categorie 

        delete values['tailleVetement'];

       }
      console.log(values);
    }}
  >
    {({ handleChange, handleBlur, handleSubmit, values }) => (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            {" "}
            Commencons par !{" "}
          </Text>
          <Input placeholder="Titre de l'annonce"
           value={values.titre}
           onChangeText={handleChange('titre')}
           onBlur={handleBlur('titre')}
          />
          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Catégories"
            data={ctg}
            onChangeText={(value) => setSelectedCtg(value)}
          />

          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Sous catégories"
            data={SctgCallBack()}
            onChangeText={(value) => setSelectedSCtg(value)}
          />
          {/* <Text>la valeur est = {selectedSCtg}</Text> */}
        </Card>
        {(() => {
          if (selectedSCtg == "Vêtements femme")
          {
          return <DroplistVetF />
          }
          else if (selectedSCtg == "Vêtements homme")
          {
            return <DroplistVetH /> 
          }
          else if (selectedSCtg == "Vêtements enfant") {
            return <DroplistVetEnf /> 
          }
          else if (selectedSCtg == "Chaussures") {
            return <DroplistChauss /> 
          }
          else if (selectedSCtg == "Sac, bagage et accessoires") {
            return <DroplistSacBag /> 
          }
          else if (selectedSCtg == "Bijoux et montres") {
            return <DroplistBijMontre /> 
          }
          else if (selectedSCtg == "Voitures") {
            return <DroplistVoiture /> 
          }
          else if (selectedSCtg == "Motos") {
            return <DroplistMoto /> 
          }

        })()}
        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Description de l'article
          </Text>
          <TextInput
            onChangeText={onChangeNumber}
            value={number}
            placeholder="Description ... "
            multiline={true}
            numberOfLines={5}
            value={values.description}
            onChangeText={handleChange('description')}
            // onBlur={handleBlur('description')}
          />
        </Card>

        {/* Image function add database */}

        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            Ajouter une photo
          </Text>
          <TouchableOpacity onPress={pickImage} style={{alignItems: 'center'}}>
          <Image style={styles.resizePicture} source={require('../../assets/add-photo.png')} />
          </TouchableOpacity>
          <View
                  style={{
                    flex: 1,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {image && (
                    <Image
                      source={{ uri: image }}
                      style={{ width: 200, height: 200 }}
                    />
                  )}
                </View>
        </Card>
        <Card>
          <Text
            style={{
              color: "#4f9deb",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Prix
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginVertical: "5%",
            }}
          >
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
            />
            <Text style={styles.input}> DT</Text>
          </View>
          <Button
            title="Publier annonce"
            buttonStyle={{ backgroundColor: "#4f9deb" }}
            onPress={handleSubmit}

          />
        </Card>
      </View>
    </ScrollView>
       )}
       </Formik>
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
export default PublishAnnonce;
