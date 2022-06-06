import React from "react";
import {View,Text,StyleSheet} from  'react-native'
import Cardsctg from "../components/sousCtg/Cardsctg";
import { Avatar, Card, Title, Paragraph, Badge } from "react-native-paper";

const MesArticles = (props) => { 
    return(
        <View style={styles.parent}>
        <View style={styles.container}>
            <Card style={styles.cardStyle}>
                <Cardsctg
                    count="285"
                    path={require("../../assets/iconCategories/Jeux.png")}
                    title="Jeux et Jouets"
                />
            </Card>
            <Card style={styles.cardStyle}>
                <Cardsctg
                    count="12"
                    path={require("../../assets/iconCategories/Musique.png")}
                    title="Instruments de musqiue"
                />
            </Card>
            <Card style={styles.cardStyle}>
                <Cardsctg
                    count="62"
                    path={require("../../assets/iconCategories/Livre.png")}
                    title="Livres"
                />
            </Card>
            <Card style={styles.cardStyle}>
                <Cardsctg
                    count="29"
                    path={require("../../assets/iconCategories/CD.png")}
                    title="CD/DVD"
                />
            </Card>
            
            <Card style={styles.cardStyle}>
                <Cardsctg
                    count="0"
                    path={require("../../assets/iconCategories/otherr.png")}
                    title="Autres"
                />
            </Card>


        </View>
    </View>
    )
}


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
})


export default MesArticles