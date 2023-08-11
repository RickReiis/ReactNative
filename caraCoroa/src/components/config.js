import React, {useState} from "react";
import {View, Text, TextInput, StyleSheet} from "react-native";
import Globais from "./global";

export default function(){

    const [qtGiros, setQtGiro] = useState(Globais.qtGiro);
    const [tmpG, setTmpG] = useState(Globais.tmpEsp);

    function giro(q){
        Globais.qtGiro=parseInt(q)
        setQtGiro(q)
    }
    function tmpEs(t){
        Globais.tmpEsp=parseInt(t)
        setTmpG(t)
    }
    return(
        <View style={estilo.bloco}>
            <View style={{marginBottom:10}}>
                <Text style={estilo.txt}>
                    Quantidade de Giros
                </Text>
                <TextInput
                    style={estilo.inp}
                    keyboardType="numeric"
                    onChangeText={text=>giro(text)}
                />
            </View>
            <View style={{marginBottom:10}}>
                <Text style={estilo.txt}>
                    Velocidade do Giro
                </Text>
                <TextInput
                    style={estilo.inp}
                    keyboardType="numeric"
                    onChangeText={text=>tmpEs(text)}
                />
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    inp:{
        width:"100%",
        borderWidth: 1,
        borderColor:"#000",
        borderRadius:10,
        padding:5,
        fontSize:16
    },
    txt:{
        color:"#000",
        fontSize:20
    },
    bloco:{
        padding:10
    }
})