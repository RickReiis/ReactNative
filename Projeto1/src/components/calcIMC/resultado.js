import React from "react";
import {Text, View, StyleSheet} from "react-native";

export default props=>{
    return(
        <View style={{width:"50%", height:50}}>
            <View style={{alignItems:"center"}}>
                <Text style={estilo.bloco}>IMC</Text>
                <Text style={estilo.bloco}>
                    {props.result}
                </Text> 
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        color:"#000", 
        fontSize:16
    }
})