import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Cardsctg from "../components/sousCtg/Cardsctg";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";

const MesArticles = (props) => {
  const data = [
    {
      id: 1,
      count: 285,
      path:require("../../assets/iconCategories/Jeux.png"),
      title: "Jeux et Jouets",
    },
    {
      id: 2,
      count: 12,
      path:require("../../assets/iconCategories/Livre.png"),
      title: "Livres",
    },
    {
      id: 3,
      count: 285,
      path:require("../../assets/iconCategories/Jeux.png"),
      title: "Jeux et Jouets",
    },
    
  ];
  const renderItem = ({ item }) => (
    <View style={styles.container}>
    <Card style={styles.cardStyle}>
      <Cardsctg
        count={item.count}
        path={item.path}
        title={item.title}
      />
    </Card>
      </View>
  );
  return (
    <View style={styles.parent}>

        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
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

export default MesArticles;
