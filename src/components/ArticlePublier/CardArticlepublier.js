import React, { useState } from 'react';
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, Portal, Card, Provider } from "react-native-paper";
import { Button, Overlay } from 'react-native-elements';

const CardArticlepublier = (props) => {
    const [visible, setVisible] = useState(false);
  
    const toggleOverlay = () => {
      setVisible(!visible);
    };
  const Message = () => {
    if (props.count > 1) {
      return "Plusieurs annonces sont disponibles";
    } else if (props.count == 1) {
      return "Une seule annonce est disponible !";
    } else {
      return "Pas d'annonces pour le moment ... ";
    }
  };

  return (
    <View>
        
        <View>

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>{props.title}</Text>
      </Overlay>
    </View>
      <View>
        <Card.Title
          title={props.title}
          subtitle={
            <View>
              <Text>{props.sousCtg} </Text>
              <Text style={{ fontWeight: "700" }}>{props.prix} € </Text>
            </View>
          }
          left={() => (
            <Image
              {...props}
              style={{ backgroundColor: "transparent" }}
              source={props.path}
              style={{ width: 50, height: 50 }}
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
                <TouchableOpacity onPress={toggleOverlay}>
                  <MaterialCommunityIcons
                    name="information-outline"
                    size={34}
                    color="black"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <MaterialIcons
                    name="delete"
                    size={34}
                    color="red"
                    style={{ marginLeft: "10%" }}
                  />
                </TouchableOpacity>
              </View>
            </>
          )}
        />
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

export default CardArticlepublier;
