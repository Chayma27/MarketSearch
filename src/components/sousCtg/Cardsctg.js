import React from "react";
import { View, Text, StyleSheet , TouchableOpacity } from "react-native";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
const Cardsctg = (props) => {
    const Message=() => { 
        if (props.count > 1) { 
            return "Plusieurs annonces sont disponibles"
        } else if (props.count == 1){ 
            return "Une seule annonce est disponible !"
        } else { 
            return "Pas d'annonces pour le moment ... "
        }
    }
  return (
        <TouchableOpacity>
          <Card.Title
            title={props.title}
            subtitle= {Message()}
            left={() => (
              <Avatar.Image
                {...props}
                size={40}
                style={{backgroundColor : "transparent"}}
                source={props.path}
              />
            )}
            right={() => (
              <>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
                  <Badge
                    size={25}
                    style={{
                      marginRight: "5%",
                      backgroundColor: "#E8E1D9",
                      color: "black",
                      fontWeight: "600",
                    }}
                  >
                    {props.count}
                  </Badge>
                  <AntDesign
                    name="rightcircleo"
                    size={24}
                    color="black"
                    style={{ marginLeft: "0%" }}
                  />
                </View>
              </>
            )}
          />
          </TouchableOpacity>
     
  );
};

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "white",
    flex: 1,
  },

  container: {
    marginTop: "10%",
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
  },
  cardStyle: {
    
    backgroundColor: "#F0F0F0",
    borderRadius : 20, 
    width : "96%", 
  },
  titleHeader: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Cardsctg;
