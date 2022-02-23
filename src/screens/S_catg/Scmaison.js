import React from "react";
import {View,Text,StyleSheet} from  'react-native'
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import Cardsctg from "../../components/sousCtg/Cardsctg";

const Scmaison = (props) => { 
    return (
        <View style={styles.parent}>
          <View style={styles.container}>
            <Card style={styles.cardStyle}>
              <Cardsctg
                count="132"
                path={require("../../../assets/iconCategories/Meuble.png")}
                title="Meuble"
              />
            </Card>
            <Card style={styles.cardStyle}>
              <Cardsctg
                count="205"
                path={require("../../../assets/iconCategories/Electro.png")}
                title="Electroménager"
              />
            </Card>
            <Card style={styles.cardStyle}>
              <Cardsctg
                count="55"
                path={require("../../../assets/iconCategories/Deco.png")}
                title="Décor"
              />
            </Card>
            <Card style={styles.cardStyle}>
              <Cardsctg
                count="129"
                path={require("../../../assets/iconCategories/Art.png")}
                title="Art de la table"
              />
            </Card>
            
            <Card style={styles.cardStyle}>
              <Cardsctg
                count="0"
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

export default Scmaison