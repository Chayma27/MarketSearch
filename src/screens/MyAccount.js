import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";
import { MaterialCommunityIcons, Ionicons, Entypo, FontAwesome } from "@expo/vector-icons";
const MyAccount = (props) => {
  return (
    // <View>
    //   <Text> Mon Compte </Text>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="shopping-outline"
              size={24}
              color="black"
            />
            <Text style={styles.cardTitle}> Mes commandes</Text>
          </View>
          <Card.Divider />
          <View style={{ flexDirection: "row" }}>
            <Ionicons name="heart-outline" size={24} color="black" />
            <Text style={styles.cardTitle}> Mes favoris</Text>
          </View>
          <Card.Divider />
          <View style={{ flexDirection: "row" }}>
            <Entypo name="publish" size={23} color="black" />
            <Text style={styles.cardTitle}> Mes articles publiés</Text>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
          <MaterialCommunityIcons name="card-account-details-outline" size={24} color="black" />
            <Text style={styles.cardTitle}> Mes informations</Text>
          </View>
        </Card>
        <Card>
          <View style={{ flexDirection: "row" }}>
          <Ionicons name="information-circle-outline" size={24} color="black" />
            <Text style={styles.cardTitle}> A propos de nous</Text>
          </View>
        </Card>
        <Card>
          <Button
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
    paddingBottom: "2%",
  },
});
export default MyAccount;
