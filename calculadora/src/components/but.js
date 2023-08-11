import React from "react";
import {View, TouchableHighlight, Text, StyleSheet} from "react-native";

export default props=>{
    return(
        <TouchableHighlight 
            style={estilo.botao}
            onPress={props.fun}
        >
            <Text style={{color:props.cor, fontSize:35, textAlign:"center"}}>{props.tit}</Text>
        </TouchableHighlight>
    )
}

const estilo = StyleSheet.create({
    botao:{
        width:"25%",
        height:"100%",
        backgroundColor:"#000",
        flex:1,
        justifyContent:"center"
    }
})