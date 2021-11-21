import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { Ionicons, FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Categories = props => {
    return (
        <View style={styles.contenu}>

            <Text style={styles.unboxing}> <FontAwesome5 name="tshirt" size={30}/>
            Vêtements</Text>
    

            <Text style={styles.unboxing} >Cuisine</Text>
            <Text style={styles.unboxing} >Informatique</Text>
            <Text style={styles.unboxing} >Décor</Text>
            <Text style={styles.unboxing} >Beauté</Text>
            <Text style={styles.unboxing} >SkinCare</Text>
            <Text style={styles.unboxing} >Electroménager</Text>
            <Text style={styles.unboxing} >Maquillage</Text>
            <Text style={styles.unboxing} >Footwear</Text>
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