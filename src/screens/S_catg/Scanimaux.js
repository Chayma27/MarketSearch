import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Cardsctg from "../../components/sousCtg/Cardsctg";
const Scanimaux = (props) => {
  return (
    <View style={styles.parent}>
      <View style={styles.container}>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="100"
            path={require("../../../assets/iconCategories/dog-avatar.png")}
            title="Chien"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="10"
            path={require("../../../assets/iconCategories/avatar-chat.png")}
            title="Chat"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="10"
            path={require("../../../assets/iconCategories/oiseau.png")}
            title="Oiseau"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="10"
            path={require("../../../assets/iconCategories/avatar-lapin.png")}
            title="Lapin"
          />
        </Card>
        
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="1"
            path={require("../../../assets/iconCategories/cheval.png")}
            title="Cheval"
          />
        </Card>
        <Card style={styles.cardStyle}>
          <Cardsctg
            count="300"
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

export default Scanimaux;
