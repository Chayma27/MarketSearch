import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import CardArticlepublier from "../components/ArticlePublier/CardArticlepublier";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";

const MesArticles = (props) => {
  const data = [
    {
      id: 1,
      prix: 100,
      path:require("../../assets/Rouge.jpg"),
      title: "rouge a levre",
      sousCtg : "Bijoux et montre"
    },
    {
      id: 2,
      prix: 12,
      path:require("../../assets/short.jpg"),
      title: "Livres",
      sousCtg : "Vetements homme"

    },
    {
      id: 3,
      prix: 285,
      path:require("../../assets/iconCategories/Jeux.png"),
      title: "Jeux et Jouets",
    },
    
  ];
  const renderItem = ({ item }) => (
    <View style={styles.container}>
    <Card style={styles.cardStyle}>
      <CardArticlepublier
        count={item.prix}
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
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    width: "96%",
  },
  titleHeader: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default MesArticles;
