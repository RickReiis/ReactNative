import React from "react";
import {Text, View, TextInput, StyleSheet} from "react-native";

export default props=>{
    return(
        <View style={estilo.bloco}>
            <Text>{props.tit}</Text>
            <TextInput 
                style={estilo.textoI}
                keyboardType={'numeric'}
                autoFocus={true}
                onChangeText={text=>props.aoMod(text)}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        marginBottom:15
    },
    textoI:{
        width:"100%",
        borderWidth:1, 
        borderColor:"#000",
        borderRadius:5,
        padding:5
    }
})