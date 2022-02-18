import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Categories = props => {
    return (
        <View style={styles.contenu}>

            
        <Text style={styles.unboxing}>  
            <FontAwesome5 name="tshirt" size={30}/> {"\n"}Mode</Text>
       
        <Text style={styles.unboxing}>
            <FontAwesome5 name="utensils" size={30}/> {"\n"}Maison & cuisine</Text>
           
        <Text style={styles.unboxing}>
            <FontAwesome5 name="car-alt" size={30}/> {"\n"} Véhicule</Text>

        <Text style={styles.unboxing}>
            <FontAwesome5 name="tv" size={30}/> {"\n"} Multimédia</Text>

        <Text style={styles.unboxing}>
            <FontAwesome5 name="playstation" size={30}/> {"\n"}Loisir</Text>
            
        <Text style={styles.unboxing}>
        <FontAwesome5 name="biking" size={30}/> {"\n"}Sport</Text>
           
        <Text style={styles.unboxing}>
        <FontAwesome5 name="eye-dropper" size={30}/> {"\n"}Visage et Beauté</Text>
            
        <Text style={styles.unboxing}>
        <FontAwesome5 name="dog" size={30}/> {"\n"}Animaux</Text>
        


        <Text style={styles.unboxing}>
            <FontAwesome5 name="ellipsis-h" size={30}/> {"\n"}Autres</Text>
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
        width: 120,
        paddingVertical: '5%',
        fontWeight: 'bold',
        // borderWidth: 0.5,
        borderColor: "tomato",
        fontFamily:'Times New Roman',
        paddingBottom : 22,
        textShadowRadius:10,
        borderRadius: 50,
        
    
    }
})
export default Categories