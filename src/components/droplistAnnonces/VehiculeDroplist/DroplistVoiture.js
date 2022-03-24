import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  Text,
  Card,
  Icon,
  Input,
  Button,
  Divider,
  Slider
} from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Vehicule from "../../../utilitaires/Ref_Vehicule";
import DatePicker from "react-native-datepicker";
import NumericInput from "react-native-numeric-input";

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
  const [date, setDate] = useState("01-01-2020");
  const [state, setState] = useState(0);


  const [value, setValue] = useState(0);
  const [vertValue, setVertValue] = useState(0);

  const interpolate = (start, end) => {
    let k = (value - 0) / 10; // 0 =>min  && 10 => MAX
    return Math.ceil((1 - k) * start + k * end) % 256;
  };

  const color = () => {
    let r = interpolate(255, 0);
    let g = interpolate(0, 255);
    let b = interpolate(0, 0);
    return `rgb(${r},${g},${b})`;
  };


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
      <Text
        style={{
          color: "grey",
          fontSize: 16,
          fontWeight: "900",
          textAlign: "center",
        }}
      >
        {" "}
        Date de première mise en circulation
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="31-12-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              // display: 'none',
              position: "absolute",
              left: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setDate(date);
          }}
        />
      </View>
      <Divider
        color="#f8f8f9"
        style={{ borderWidth: 0.5, marginBottom: "4%" }}
      />
      <Text
        style={{
          color: "grey",
          fontSize: 16,
          fontWeight: "900",
          textAlign: "center",
          marginBottom: "5%",
        }}
      >
        Kilométrage{" "}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <NumericInput
          onLimitReached={(isMax, msg) => console.log(isMax, msg)}
          value={state}
          minValue={0}
          step={20}
          onChange={(value) => setState({ value })}
        />
      </View>

      <Divider
        color="#f8f8f9"
        style={{ borderWidth: 0.5, marginBottom: "4%" }}
      />
         <Text
        style={{
          color: "grey",
          fontSize: 16,
          fontWeight: "900",
          textAlign: "center",
          marginBottom: "5%",
        }}
      >
        Puissance Fiscale (CV){" "}
      </Text>
      <View style={[styles.contentView]}>
        <Slider
          value={value}
          onValueChange={setValue}
          maximumValue={10}
          minimumValue={0}
          step={1}
          allowTouchTrack
          trackStyle={{ height: 5, backgroundColor: 'transparent' }}
          thumbStyle={{ height: 20, width: 20, backgroundColor: 'transparent' }}
          thumbProps={{
            children: (
              <Icon
                name="car"
                type="font-awesome"
                size={20}
                reverse
                containerStyle={{ bottom: 20, right: 20 }}
                color={color()}
              />
            ),
          }}
        />
        <Text style={{ paddingTop: 20 }}>Value: {value}</Text>
      </View>




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
  datePickerStyle: {
    justifyContent: "center",
    width: 200,
    marginTop: 20,
  },
});

export default DroplistVoiture;