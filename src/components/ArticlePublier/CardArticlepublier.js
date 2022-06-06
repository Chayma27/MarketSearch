import React from "react";
import {Image, View, Text, StyleSheet , TouchableOpacity } from "react-native";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { MaterialIcons } from '@expo/vector-icons';
const CardArticlepublier = (props) => {
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
            subtitle={(
                    <View>
                     <Text>{props.sousCtg} </Text>
                     <Text style={{fontWeight : '700'}}>{props.prix} € </Text>
                        </View>
                
            )}
            left={() => (
              <Image
                {...props}
                style={{backgroundColor : "transparent"}}
                source={props.path}
                style={{width : 50 , height : 50}}
              />
            )}
            right={() => (
              <>
              <TouchableOpacity>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around",
                  }}
                >
             
                  <MaterialIcons name="delete" size={34} color="red"                     style={{ marginLeft: "10%" }}
 />
                </View>
                </TouchableOpacity>
              </>
            )}
          />
            {/* <Card.Content>
              <Paragraph style={{ color: "grey", marginLeft: 55 }}>Prix : 125</Paragraph>
          </Card.Content> */}
       
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

export default CardArticlepublier;
