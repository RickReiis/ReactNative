import React from "react";
import {View, Text, StyleSheet, TextInput } from "react-native";

export default props=>{
    return(
        <View style={estilo.bloco}>
            <Text style={estilo.titl}>{props.tit}</Text>
            <TextInput
                autoFocus={true}
                keyboardType="numeric"
                onChangeText={text=>props.aoMod(text)}
                style={estilo.txtInp}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        margin:15
    },
    txtInp:{
        width:"100%",
        borderWidth:1,
        borderColor:"#000",
        borderRadius:10,
        fontSize:16
    },
    titl:{
        marginBottom:10,
        fontSize:16,
        color:"#000"
    }
})