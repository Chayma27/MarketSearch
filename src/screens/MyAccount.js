import React from "react";
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import {
  MaterialCommunityIcons,
  Ionicons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const MyAccount = (props) => {
  return (
    // <View>
    //   <Text> Mon Compte </Text>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="shopping-outline"
                size={24}
                color="black"
              />
              <Text style={styles.cardTitle}> Mes commandes</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flexGrow: 1,
                }}
              >
                <AntDesign name="rightcircleo" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <Card.Divider />
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="heart-outline" size={24} color="black" />
              <Text style={styles.cardTitle}> Mes favoris</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flexGrow: 1,
                }}
              >
                <AntDesign name="rightcircleo" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
          <Card.Divider />
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Entypo name="publish" size={23} color="black" />
              <Text style={styles.cardTitle}> Mes articles publiés</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flexGrow: 1,
                }}
              >
                <AntDesign name="rightcircleo" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <MaterialCommunityIcons
                name="card-account-details-outline"
                size={24}
                color="black"
              />
              <Text style={styles.cardTitle}> Mes informations</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flexGrow: 1,
                }}
              >
                <AntDesign name="rightcircleo" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <TouchableOpacity>
            <View style={{ flexDirection: "row" }}>
              <Ionicons
                name="information-circle-outline"
                size={24}
                color="black"
              />
              <Text style={styles.cardTitle}> A propos de nous</Text>
              <View
                style={{
                  alignItems: "flex-end",
                  flexGrow: 1,
                }}
              >
                <AntDesign name="rightcircleo" size={24} color="black" />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
        <Card>
          <Button
            onPress={() => props.navigation.navigate("Connexion")}
            icon={
              <FontAwesome
                name="sign-out"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
                size={24}
              />
            }
            title="Se déconnecter"
            buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
            containerStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            titleStyle={{ color: "white", marginHorizontal: 20 }}
          />
        </Card>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  cardTitle: {
    fontWeight: "bold",
    color: "#43484D",
    paddingBottom: "3%",
    marginTop : '1%'
  },
});
export default MyAccount;
