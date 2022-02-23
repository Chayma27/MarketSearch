import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Cardsctg from "../../components/sousCtg/Cardsctg";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";


const Scmultimedia = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="454"
            path={require("../../../assets/iconCategories/Informatique.png")}
            title="Informatique"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="60"
            path={require("../../../assets/iconCategories/Manette.png")}
            title="Consoles et Jeux vidéo"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="1034"
            path={require("../../../assets/iconCategories/Tel.png")}
            title="Téléphone"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="457"
            path={require("../../../assets/iconCategories/TV.png")}
            title="Image et Son"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="2"
            path={require("../../../assets/iconCategories/otherr.png")}
            title="Autres"
          />
        </Card>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "white",
    flex: 1,
  },

  container: {
    marginTop: "10%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  cardStyle: {
    marginBottom: "3%",
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    width: "96%",
  },
  titleHeader: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});


export default Scmultimedia