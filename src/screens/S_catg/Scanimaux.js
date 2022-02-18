import React from "react";
import {View,Text,StyleSheet} from  'react-native'


const Scanimaux = (props) => { 
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleHeader}> Sous categories ! Animaux ! </Text>
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


export default Scanimaux