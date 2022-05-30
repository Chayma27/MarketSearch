import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Button } from "react-native-elements";
import { MaterialIcons } from "@expo/vector-icons";

const CardMesFavoris = (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <View style={{ height: 130, width: 160, overflow: "hidden" }}>
          <Image
            source={props.path} // appel chemin image path
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            padding: 17,
            width: 160,
            marginBottom: 10,
            backgroundColor: "#EFE9F4",
          }}
        >
          <Text
            style={{
              color: "black",
              fontWeight: "bold",
              fontSize: 16,
              textAlign: "center",
            }}
          >
            {props.Titre}
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          ></View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#777",
              fontWeight: "500",
              marginLeft: "4%",
              marginBottom: "3%",
            }}
          >
            {props.prix}
          </Text>
          <TouchableOpacity>
          <MaterialIcons name="favorite-border" size={24} color="red" />
              </TouchableOpacity>
          <MaterialIcons name="favorite" size={24} color="red" />
        </View>
      </View>
    </View>
  );
};

export default CardMesFavoris;
