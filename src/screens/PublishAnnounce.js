import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
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
  // state droplistMode
  const [TypeVet, setTypeVet] = useState("");
  const [TypeChauss, setTypeChauss] = useState("");
  const [TypeSac, setTypeSac] = useState("");
  const [TypeBijoux, setTypeBijoux] = useState("");
  const [Taille, setTaille] = useState("");
  const [Marque, setMarque] = useState("");
  const [Couleur, setCouleur] = useState("");
  const [Etat, setEtat] = useState("");
  const [Univers, setUnivers] = useState("");
  const [Pointure, setPointure] = useState("");
  const [Matiere, setMatiere] = useState("");
  // state droplistVehicule
  const [selectedMarque, setSelectedMarque] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [annee_model, setAnnee_model] = useState("");
  const [Carburant, setCarburant] = useState("");
  const [BoiteVitesse, setBoiteVitesse] = useState("");
  const [NbPorte, setNbPorte] = useState("");
  const [NbPlace, setNbPlace] = useState("");
  const [TypeVehicule, setTypeVehicule] = useState("");
  const [date, setDate] = useState("01-01-2020");
  const [kilo, setKilo] = useState(0);
  const [Puissance, setPuissance] = useState(0);
  // state dropListMoto

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
      initialValues={{ titre: "", description: "" }}
      onSubmit={(values) => {
        values["uri_image"] = image;
        values["categorie"] = selectedCtg;
        values["sous_categorie"] = selectedSCtg;
        values["prix"] = text;
        if (selectedCtg == "Mode") {
          switch (selectedSCtg) {
            case "Vêtements femme":
              values["typeVet"] = TypeVet;
              values["Taille"] = Taille;
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Etat"] = Etat;
              // delete moto and voitures
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Marque"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["Couleur"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];

              break;
            case "Vêtements homme":
              values["typeVet"] = TypeVet;
              values["Taille"] = Taille;
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Etat"] = Etat;
              // delete moto and voitures
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Marque"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["Couleur"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];

            case "Vêtements enfant":
              values["typeVet"] = TypeVet;
              values["Taille"] = Taille;
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Etat"] = Etat;
              // delete moto and voitures
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Marque"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["Couleur"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Univers"];
              delete values["Pointure"];
              delete values["TypeChauss"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];

              break;
            case "Chaussures":
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Univers"] = Univers;
              values["TypeChauss"] = TypeChauss;
              values["Pointure"] = Pointure;
              //delete
              delete values["Taille"];
              delete values["typeVet"];
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Marque"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["Couleur"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];

              break;
            case "Sac, bagage et accessoires":

            console.log('bienvenue')
              values["Univers"] = Univers;
              values["typeSac"] = TypeSac;
              values["Taille"] = Taille;
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Etat"] = Etat;
              values["Matiere"] = Matiere;
              // delete moto and voitures
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Marque"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["Couleur"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Univers"];
              delete values["Pointure"];
              delete values["TypeChauss"];
              delete values["Taille"];
              delete values["typeBijoux"];
              break;
            case "Bijoux et montres":
              values["Univers"] = Univers;
              values["typeBijoux"] = TypeBijoux;
              values["Marque"] = Marque;
              values["Couleur"] = Couleur;
              values["Etat"] = Etat;
              values["Matiere"] = Matiere;
              // delete moto and voitures
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Model"];
              delete values["Annee_Model"];
              delete values["Type"];
              delete values["DateCirculation"];
              delete values["Kilometrage"];
              delete values["PuissanceFiscale"];
              delete values["Pointure"];
              delete values["TypeChauss"];
              delete values["typeSac"];
              delete values["Taille"];
              break;

            default:
              break;
          }
          // delete ceux de l'autre categorie
          delete values["moteur"];
        } else if (selectedCtg == "Véhicule") {
          switch (selectedSCtg) {
            case "Motos":
              values["Marque"] = selectedMarque; //
              values["Model"] = selectedModel; //
              values["Annee_Model"] = annee_model; //
              values["Type"] = TypeVehicule; //
              values["Couleur"] = Couleur; //
              values["DateCirculation"] = date; //
              values["Kilometrage"] = kilo; //
              values["PuissanceFiscale"] = Puissance; //
              delete values["Carburant"];
              delete values["Boite_vitessse"];
              delete values["NombrePorte"];
              delete values["NombrePlace"];
              delete values["Etat"];
              delete values["typeVet"];
              delete values["Taille"];
              delete values["Univers"];
              delete values["Pointure"];
              delete values["TypeChauss"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];


              break;
            case "Voitures":
              values["Marque"] = selectedMarque; //
              values["Model"] = selectedModel; //
              values["Annee_Model"] = annee_model; //
              values["Type"] = TypeVehicule; //
              values["Couleur"] = Couleur; //
              values["Carburant"] = Carburant; //
              values["Boite_vitessse"] = BoiteVitesse; //
              values["NombrePorte"] = NbPorte; //
              values["NombrePlace"] = NbPlace; //
              values["DateCirculation"] = date; //
              values["Kilometrage"] = kilo; //
              values["PuissanceFiscale"] = Puissance; //
              delete values["Etat"];
              delete values["typeVet"];
              delete values["Taille"];
              delete values["Etat"];
              delete values["typeVet"];
              delete values["Taille"];
              delete values["Univers"];
              delete values["Pointure"];
              delete values["TypeChauss"];
              delete values["Matiere"];
              delete values["typeBijoux"];
              delete values["typeSac"];


              

              break;

              break;

            default:
              break;
          }

          // delete ceux de l'autre categorie

          delete values["tailleVetement"];
        }
        console.log(values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <ScrollView>
          <View style={styles.container}>
            <Card>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {" "}
                Commencons par !{" "}
              </Text>
              <Input
                placeholder="Titre de l'annonce"
                value={values.titre}
                onChangeText={handleChange("titre")}
                onBlur={handleBlur("titre")}
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
              if (selectedSCtg == "Vêtements femme") {
                return (
                  <DroplistVetF
                    setTypeVet={setTypeVet}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Vêtements homme") {
                return (
                  <DroplistVetH
                    setTypeVet={setTypeVet}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Vêtements enfant") {
                return (
                  <DroplistVetEnf
                    setTypeVet={setTypeVet}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Chaussures") {
                return (
                  <DroplistChauss
                    setUnivers={setUnivers}
                    setTypeChauss={setTypeChauss}
                    setPointure={setPointure}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Sac, bagage et accessoires") {
                return (
                  <DroplistSacBag
                    setUnivers={setUnivers}
                    setTypeSac={setTypeSac}
                    setMatiere={setMatiere}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Bijoux et montres") {
                return (
                  <DroplistBijMontre
                    setUnivers={setUnivers}
                    setTypeBijoux={setTypeBijoux}
                    setMatiere={setMatiere}
                    setTaille={setTaille}
                    setMarque={setMarque}
                    setCouleur={setCouleur}
                    setEtat={setEtat}
                  />
                );
              } else if (selectedSCtg == "Voitures") {
                return (
                  <DroplistVoiture
                    setSelectedMarque={setSelectedMarque}
                    selectedMarque={selectedMarque}
                    setSelectedModel={setSelectedModel}
                    selectedModel={selectedMarque}
                    setAnnee_model={setAnnee_model}
                    setCarburant={setCarburant}
                    setBoiteVitesse={setBoiteVitesse}
                    setNbPorte={setNbPorte}
                    setNbPlace={setNbPlace}
                    setCouleur={setCouleur}
                    setTypeVehicule={setTypeVehicule}
                    setDate={setDate}
                    setKilo={setKilo}
                    setPuissance={setPuissance}
                    date={date}
                    Puissance={Puissance}
                  />
                );
              } else if (selectedSCtg == "Motos") {
                return (
                  <DroplistMoto
                    setTypeVehicule={setTypeVehicule}
                    setAnnee_model={setAnnee_model}
                    setCouleur={setCouleur}
                    setDate={setDate}
                    kilo={kilo}
                    setKilo={setKilo}
                    setPuissance={setPuissance}
                    date={date}
                    Puissance={Puissance}
                    setSelectedMarque={setSelectedMarque}
                    selectedMarque={selectedMarque}
                    setSelectedModel={setSelectedModel}
                    selectedModel={selectedMarque}
                  />
                );
              }
            })()}
            <Card>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Description de l'article {Etat}
              </Text>
              <TextInput
                onChangeText={onChangeNumber}
                value={number}
                placeholder="Description ... "
                multiline={true}
                numberOfLines={5}
                value={values.description}
                onChangeText={handleChange("description")}
                // onBlur={handleBlur('description')}
              />
            </Card>

            {/* Image function add database */}

            <Card>
              <Text
                style={{
                  fontSize: 22,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Ajouter une photo
              </Text>
              <TouchableOpacity
                onPress={pickImage}
                style={{ alignItems: "center" }}
              >
                <Image
                  style={styles.resizePicture}
                  source={require("../../assets/add-photo.png")}
                />
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
  resizePicture: {
    width: 150,
    height: 150,
  },
});
export default PublishAnnonce;
