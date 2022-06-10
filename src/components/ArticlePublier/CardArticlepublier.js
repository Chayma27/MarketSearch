import React, { useState } from "react";
import { Image, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Modal, Portal, Card, Provider } from "react-native-paper";
import { Button, Overlay } from "react-native-elements";

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
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={styles.overlayStyle}
        >
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>ID-Article : </Text>
              <Text>{props.id}</Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Nom de l'article : </Text>
              <Text>{props.title}</Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Categories : </Text>
              <Text>Chien</Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Sous Categories : </Text>
              <Text>{props.sousCtg}</Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Prix : </Text>
              <Text>{props.prix} €</Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "column", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Description : </Text>

              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
            </View>
          </Card>
          <Card>
            <View style={{ flexDirection: "row", margin: "5%" }}>
              <Text style={{ fontWeight: "700" }}>Date de publication : </Text>
              <Text>10-05-2022:11:12:01</Text>
            </View>
          </Card>
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
  overlayStyle: {
    height: "80%",
    width: "90%",
    borderRadius: 25,
  },
});

export default CardArticlepublier;
