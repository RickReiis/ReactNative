import React from "react";
import {View, StyleSheet, Image} from "react-native";

export default props=>{

    return(
        <View style={estilo.bloco}>
           {
               props.result == 0?
                <Image
                    source={require('../assets/bomba.png')}
                    style={estilo.imagem}
                />:
                props.result <= 70? 
                <Image
                    source={require('../assets/bomba_etanol.png')}
                    style={estilo.imagem}
                />:
                <Image
                    source={require('../assets/bomba_gasolina.png')}
                    style={estilo.imagem}
                />
           }
        </View>
    )
}

const estilo = StyleSheet.create({
    bloco:{
        marginRight:15,
        marginLeft:15
    },
    imagem:{
        width:"100%",
        resizeMode:"contain"
    }
})