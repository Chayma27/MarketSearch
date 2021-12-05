import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Categories = props => {
    return (
        <View style={styles.contenu}>

            
        <Text style={styles.unboxing}>  
            <FontAwesome5 name="tshirt" size={30}/> {"\n"}Vêtements</Text>
       
        <Text style={styles.unboxing}>
            <FontAwesome5 name="utensils" size={30}/> {"\n"}Cuisine</Text>
           
        <Text style={styles.unboxing}>
            <FontAwesome5 name="tv" size={30}/> {"\n"} Hightech</Text>

        <Text style={styles.unboxing}>
            <FontAwesome5 name="holly-berry" size={30}/> {"\n"} Décor</Text>

        <Text style={styles.unboxing}>
            <FontAwesome5 name="star" size={30}/> {"\n"}Maquillage</Text>
            
        <Text style={styles.unboxing}>
        <FontAwesome5 name="playstation" size={30}/> {"\n"}Jouets</Text>
           
        <Text style={styles.unboxing}>
        <FontAwesome5 name="plug" size={30}/> {"\n"}Electroménager</Text>
            
        <Text style={styles.unboxing}>
        <FontAwesome5 name="car-alt" size={30}/> {"\n"}Véhicules</Text>
        


        <Text style={styles.unboxing}>
            <FontAwesome5 name="leaf" size={30}/> {"\n"}Jardin/Auto/Brico</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginLeft: '4%',
        marginTop: '3%'
    },
    unboxing: {
        textAlign: 'center',
        fontSize: 20,
        borderWidth: 0,
        width: 120,
        paddingVertical: '5%',
        fontWeight: 'bold',
    }
})
export default Categories