import React from "react";
import {View,Text,StyleSheet} from  'react-native'
import Cardsctg from "../../components/sousCtg/Cardsctg";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const Scsport = (props) => { 
    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <Card style={styles.cardStyle}>
                    <Cardsctg
                        count="43"
                        path={require("../../../assets/iconCategories/Velo.png")}
                        title="Vélos"
                    />
                </Card>
                <Card style={styles.cardStyle}>
                    <Cardsctg
                        count="138"
                        path={require("../../../assets/iconCategories/Equipement.png")}
                        title="Equipements"
                    />
                </Card>
                <Card style={styles.cardStyle}>
                    <Cardsctg
                        count="70"
                        path={require("../../../assets/iconCategories/Nutrition.png")}
                        title="Nutrition sportive"
                    />
                </Card>

                <Card style={styles.cardStyle}>
                    <Cardsctg
                        count="1"
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


export default Scsport