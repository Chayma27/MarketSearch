import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Input, Button, Divider } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Vehicule from "../../../utilitaires/Ref_Vehicule";
import * as Ref_Mode from "../../../utilitaires/Ref_Mode";
import DatePicker from 'react-native-datepicker';

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
    const [date, setDate] = useState('01-01-2020');

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
       <Text style={{color: 'grey', fontSize : 16, fontWeight : '900',  textAlign : "center"}}> Date de première mise en circulation
  </Text>
  <View style={{flexDirection : 'row',justifyContent : "center" , marginBottom : '5%'}}>

       <DatePicker
          style={styles.datePickerStyle}
          date={date} //initial date from state
          mode="date" //The enum of date, datetime and time
          placeholder="select date"
          format="DD-MM-YYYY"
          minDate="01-01-2000"
          maxDate="01-01-2022"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              // display: 'none',
              position: 'absolute',
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
        <Divider color="#f8f8f9" style={{borderWidth : 0.2}} />
   
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
    justifyContent : "center",
    width: 200,
    marginTop: 20,
  },
});

export default DroplistMoto;
