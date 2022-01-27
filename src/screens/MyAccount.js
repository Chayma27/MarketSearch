import React from "react";
import { StyleSheet, View, ScrollView, Image } from "react-native";
import { Text, Card, Button, Icon } from "react-native-elements";

const MyAccount = (props) => {
  return (
    // <View>
    //   <Text> Mon Compte </Text>
    // </View>
    <ScrollView>
      <View style={styles.container}>
        <Card>
          <Text style={styles.cardTitle}>Mes commandes</Text>
          <Card.Divider />
          <Text style={styles.cardTitle}>Mes favoris</Text>
          <Card.Divider />
          <Text style={styles.cardTitle}>Mes articles publiés</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>Mes informations</Text>
        </Card>
        <Card>
          <Text style={styles.cardTitle}>A propos de nous</Text>
        </Card>

        <Card>
          <Button
            icon={
              <Icon
                name="code"
                color="#ffffff"
                iconStyle={{ marginRight: 10 }}
              />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Se déconnecter"
          />
          </Card>
          <Card>
          <Button
           icon={
            <Icon
              name="code"
              color="black"
              iconStyle={{ marginRight: 10 }}
            />
          }
            title="Se déconnecter"
            buttonStyle={{
              backgroundColor: "rgba(244, 244, 244, 1)",
              borderRadius: 3,
              
            }}
            containerStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            titleStyle={{ marginHorizontal: 20, color: "black" }}
          />
</Card>
<Card>
          <Button
           icon={
            <Icon
              name="code"
              color="#ffffff"
              iconStyle={{ marginRight: 10 }}
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
