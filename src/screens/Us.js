import React from "react";
import {View,Text,StyleSheet} from  'react-native'

const Us = (props) => { 
    
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleHeader}> A propos de nous ! Screen ! </Text>
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


export default Us