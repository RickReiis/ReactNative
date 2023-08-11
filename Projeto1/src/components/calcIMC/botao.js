import React from "react";
import {Text, View, TouchableHighlight, StyleSheet} from "react-native";

export default props=>{
    return(
        <View style={{width:"50%", height:50}}>
            <TouchableHighlight
                onPress={props.aoClic}
                style={estilo.botao}
            >
                <Text style={estilo.textBotao}>Calcular</Text>
            </TouchableHighlight>
        </View>
    )
}

const estilo = StyleSheet.create({
    botao:{
        backgroundColor:"#8B8B8B",
        borderRadius:10,
        height:"100%",
        width:"100%",
        justifyContent:"center"
    },
    textBotao:{
        textAlign:"center",
        fontSize:20,
        color:"#000"
    }
})