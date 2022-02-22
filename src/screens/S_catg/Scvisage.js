import React from "react";
import {View,Text,StyleSheet} from  'react-native'


const Scvisage = (props) => { 
    return(
        <View style = {styles.container}>
            <Text style = {styles.titleHeader}> Sous categories ! Visage et Beauté ! </Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container : { 
        flex: 1 ,
    }, 
    titleHeader: { 
        fontSize : 17, 
        textAlign : 'center', 
        fontWeight : 'bold'
    }
})


export default Scvisage