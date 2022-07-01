import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Card, Icon, Input, Button,AirbnbRating } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import * as Ref_Mode from "../../../utilitaires/Ref_Mode";
const VetF = Ref_Mode.VetF;
const Chauss = Ref_Mode.Chauss;

const DroplistChauss = (props) => {
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
        label="Univers"
        data={Chauss[0].Univers}
        onChangeText={(value) => props.setUnivers(value)}

      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Type chaussure"
        data={Chauss[0].TypeChaussure}
        onChangeText={(value) => props.setTypeChauss(value)}

      />
        <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Pointure"
        data={Chauss[0].Pointure}
        onChangeText={(value) => props.setPointure(value)}

      />
      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Marque"
        data={Chauss[0].Marque}
        onChangeText={(value) => props.setMarque(value)}

      />

      <Dropdown
        icon="chevron-down"
        iconColor="#E1E1E1"
        label="Couleur"
        data={VetF[0].Couleur}
        onChangeText={(value) => props.setCouleur(value)}

      />
      <Text
        style={{
          color: "grey",
          fontSize: 16,
          fontWeight: "450",
          // textAlign: "center",
          marginBottom: "5%",
          marginLeft: "4%",
        }}
      >
        Etat{" "}
      </Text>
      <AirbnbRating
        count={6}
        reviews={[
          "Etat satisfaisant",
          "Bon état",
          "Trés bon état",
          "Excellente état",
          "Neuf sans étiquette",
          "Neuf avec étiquette",
        ]}
        defaultRating={4}
        size={20}
        onFinishRating={rating => props.setEtat(rating)}
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

export default DroplistChauss;
