import React from "react";
import {View, Image, StyleSheet} from "react-native";

export default function() {
    return(
        <View style={estilo.bloco}>
            <Image 
                source={require('./tbIMC.jpg')}
                style={estilo.tbIMC}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        marginBottom:15
    },
    tbIMC:{
        width:"100%",
        resizeMode: "contain"

    }
})