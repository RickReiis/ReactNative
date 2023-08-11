import React from "react";
import {View, StyleSheet, Text} from "react-native";

export default props=>{
    return(
        <View style={estilo.bloco}>
            {
                props.result==0?<Text></Text>:
                props.result<=70?<Text style={estilo.tex}>O combustível mais custo benefício é o Etanol</Text>:
                <Text style={estilo.tex}>O combustível mais custo benefício é a Gasolina</Text>
            }
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        margin:15
    },
    tex:{
        fontSize:20,
        color: "#000"
    }
})