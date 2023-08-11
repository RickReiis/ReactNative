import React from "react";
import {View, Text, StyleSheet, TouchableHighlight} from "react-native";

export default props=>{
    return(
        <View style={estilo.bloco}>
            <TouchableHighlight 
                style={estilo.botao}
                onPress={props.aoClic}    
            >
                <Text style={estilo.txtBot}>Calcular</Text>
            </TouchableHighlight>
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        margin:15,
        height:50
    },
    botao:{
        width:"100%",
        height:"100%",
        backgroundColor:"#0074FF",
        borderRadius:20,
        justifyContent:"center"
    },
    txtBot:{
        textTransform:"uppercase",
        color:"#000",
        fontSize:20,
        textAlign:"center"
    }
})