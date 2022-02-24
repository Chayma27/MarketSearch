import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, ScrollView, TextInput } from "react-native";
import { Text, Card, Icon, Input, Button } from "react-native-elements";
import { Dropdown } from "react-native-material-dropdown-v2-fixed";
import { PricingCard } from "react-native-elements";

import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const PublishAnnonce = (props) => {
  const [selectedValue, setSelectedValue] = useState("");
  const [number, onChangeNumber] = React.useState(null);
  const [text, onChangeText] = React.useState("0");

  let ctg = [
    {
      value: "Mode",
    },
    {
      value: "Maison & cuisine",
    },
    {
      value: "Véhicule",
    },
    {
      value: "Multimédia",
    },
    {
      value: "Loisir",
    },
    {
      value: "Sport",
    },
    {
      value: "Visage et beauté",
    },
    {
      value: "Animaux",
    },
  ];
  let Sctg = [
    {
      value: "Mercedes",
    },
    {
      value: "Audi",
    },
    {
      value: "BMW",
    },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            {" "}
            Commencons par !{" "}
          </Text>
          <Input placeholder="Titre de l'annonce" />
          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Catégories"
            data={ctg}
          />

          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Sous catégories"
            data={Sctg}
          />
        </Card>
        <Card>
          <Text
            style={{ fontSize: 22, fontWeight: "bold", textAlign: "center" }}
          >
            {" "}
            Dites-nous en plus !{" "}
          </Text>

          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Marque"
            data={ctg}
          />

          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Taille"
            data={Sctg}
          />
          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Couleur"
            data={Sctg}
          />
          <Dropdown
            icon="chevron-down"
            iconColor="#E1E1E1"
            label="Etat"
            data={Sctg}
          />
        </Card>
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
          />
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
          <View style={{ flexDirection: "row", justifyContent: "center" , marginVertical : '5%'}}>
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
});
export default PublishAnnonce;
