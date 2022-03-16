import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Vehicule from "../../../utilitaires/Ref_Vehicule";
import * as Ref_Mode from "../../../utilitaires/Ref_Mode";
const VetF = Ref_Mode.VetF;
// MODELE 
const M_Yamaha = Ref_Vehicule.M_Yamaha;
const M_Honda = Ref_Vehicule.M_Honda;

//Schema Voiture Droplist
const Moto = Ref_Vehicule.Moto;
const Voiture = Ref_Vehicule.Voiture;



const DroplistMoto = (props) => {
    const [selectedMarque, setSelectedMarque] = useState("");
    const [selectedModel, setSelectedModel] = useState("");

    const SctgCallBack = () => {
        switch (selectedMarque) {
          case "Yamaha":
            return M_Yamaha;
            break;
          case "Honda":
            return M_Honda;
            break;
        
          default:
            break;
        }
      };
  return (
    <Card>
      <Text
        style={{
          fontSize: 22,
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        {" "}
        Dites-nous en plus !{" "}
      </Text>
      {/* return en fonction de selectedSctg */}
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Marque"
        data={Moto[0].Marque}
        onChangeText={(value) => setSelectedMarque(value)}
      />
       <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Modèle"
        data={SctgCallBack()}
        onChangeText={(value) => setSelectedModel(value)}
      />
           <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Année modèle"
        data={Voiture[0].AnneeModele}
      />
       <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Type"
        data={Moto[0].Type}
      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Couleur"
        data={VetF[0].Couleur}
      />
     
   
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleHeader: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default DroplistMoto;
