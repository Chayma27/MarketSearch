import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Cardsctg from "../../components/sousCtg/Cardsctg";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";


const Scmode = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="1032"
            path={require("../../../assets/iconCategories/VetF.png")}
            title="Vêtements femme"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="398"
            path={require("../../../assets/iconCategories/VetH.png")}
            title="Vêtements homme"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="295"
            path={require("../../../assets/iconCategories/VetBb.png")}
            title="Vêtements enfant"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="603"
            path={require("../../../assets/iconCategories/Chaussure.png")}
            title="Chaussures"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="418"
            path={require("../../../assets/iconCategories/SacBag.png")}
            title="Sac, bagage et accessoires"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="186"
            path={require("../../../assets/iconCategories/BijAcces.png")}
            title="Bijoux et montres"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="72"
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



export default Scmode