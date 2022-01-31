import React from "react";
import {View,Text,StyleSheet} from  'react-native'


const Mesfavoris = (props) => { 
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleHeader}> Mes Favoris ! Screen ! </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : { 
        flex: 1 
    }, 
    titleHeader: { 
        fontSize : 17, 
        textAlign : 'center', 
        fontWeight : 'bold'
    }
})


export default Mesfavoris