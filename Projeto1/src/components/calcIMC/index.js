import React, {useState} from "react";
import { SafeAreaView, Text, View, StyleSheet, Image} from "react-native";
import Inp from "./input.js";
import BtnCalc from "./botao.js";
import Res from "./resultado.js";
import Tabela from "./tabela.js";

export default function(){

    const [peso, setPeso] = useState(0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const calc=()=>{
        if(peso==0 || !peso){
            alert("Informe o peso!")
            return
        }
        if(altura==0 || !altura){
            alert("Informe a altura!")
            return
        }
        const r = peso/(Math.pow(altura,2))
        setResultado(r.toFixed(1))
    }
    return(
    <SafeAreaView style={estilo.corpo}>
        <View style={estilo.bloco}>
            <Text>Calculadora de IMC</Text>
        </View>

        <Inp aoMod={setPeso} tit="Peso:"/>
        
        <Inp aoMod={setAltura} tit="Altura:"/>
        
        <View style={{width:"100%", flexDirection:"row"}}>

            <BtnCalc aoClic={calc}/>
            
            <Res result={resultado}/>

        </View>

        <Tabela/>

    </SafeAreaView>
  )
}

const estilo = StyleSheet.create({
    bloco:{
        marginBottom:15
    },
    corpo:{
        padding:10
    }
})