import React from 'react';
import {View ,Text, StyleSheet} from 'react-native'

const Categories = props => {
    return (
        <View style = {styles.contenu}>
            <Text style= {styles.unboxing} >Vêtements</Text>
            <Text style= {styles.unboxing} >Cuisine</Text>
            <Text style= {styles.unboxing} >Informatique</Text>
            <Text style= {styles.unboxing} >Décor</Text>
            <Text style= {styles.unboxing} >Beauté</Text>
            <Text style= {styles.unboxing} >SkinCare</Text>
            <Text style= {styles.unboxing} >Electroménager</Text>
            <Text style= {styles.unboxing} >Maquillage</Text>
            <Text style= {styles.unboxing} >Footwear</Text>
        </View>
    )
}

const styles = StyleSheet.create({
contenu : { 
flexDirection : 'row',
flexWrap : 'wrap',
marginLeft: '4%',
marginTop : '3%'
}, 
unboxing : { 
textAlign : 'center',
fontSize : 20,
borderWidth : 1, 
width : 120,
paddingVertical : '5%',
fontWeight : 'bold',
}
})
export default Categories