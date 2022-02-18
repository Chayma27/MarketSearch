import React from "react";
import {View,Text,StyleSheet} from  'react-native'


const Scsport = (props) => { 
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleHeader}> Sous categories ! Sport ! </Text>
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


export default Scsport