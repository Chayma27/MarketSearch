import React, {useState} from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Input, Button, Divider, Slider } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Vehicule from "../../../utilitaires/Ref_Vehicule";
import * as Ref_Mode from "../../../utilitaires/Ref_Mode";
import DatePicker from 'react-native-datepicker';
import NumericInput from "react-native-numeric-input";

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
    justifyContent : "center",
    width: 200,
    marginTop: 20,
  },
});

export default DroplistMoto;
