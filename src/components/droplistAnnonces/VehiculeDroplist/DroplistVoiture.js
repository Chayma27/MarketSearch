import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Vehicule from "../../../utilitaires/Ref_Vehicule";

// MODELE 
const M_Audi = Ref_Vehicule.M_Audi;
const M_BMW = Ref_Vehicule.M_BMW;
const M_Mercedes = Ref_Vehicule.M_Mercedes;
const M_Citroen = Ref_Vehicule.M_Citroen;


//Schema Voiture Droplist
const Voiture = Ref_Vehicule.Voiture;



const DroplistVoiture = (props) => {
    const [selectedMarque, setSelectedMarque] = useState("");
    const [selectedModel, setSelectedModel] = useState("");

    const SctgCallBack = () => {
        switch (selectedMarque) {
          case "Audi":
            return M_Audi;
            break;
          case "BMW":
            return M_BMW;
            break;
          case "Mercedes":
            return M_Mercedes;
            break;
          case "Citroen":
            return M_Citroen;
            break;
        //   case "Loisir":
        //     return Loisir;
        //     break;
        //   case "Sport":
        //     return Sport;
        //     break;
        //   case "Visage et Beauté":
        //     return Visage_Beaute;
        //     break;
        //   case "Animaux":
        //     return Animaux;
        //     break;
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
        data={Voiture[0].Marque}
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
        label="Carburant"
        data={Voiture[0].Carburant}
      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Boite de vitesse"
        data={Voiture[0].BoiteVitesse}
      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Nombre de porte"
        data={Voiture[0].NbrPorte}
      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Nombre de places"
        data={Voiture[0].NbrPlace}
      />
       <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Couleur"
        data={Voiture[0].Couleur}
      />
       <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Type de véhicule"
        data={Voiture[0].TypeVehicule}
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

export default DroplistVoiture;
