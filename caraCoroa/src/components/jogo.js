import React, {useState} from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, Button} from "react-native";
import Globais from "./global";

export default function(){

    const moedas = [
        require("../assets/moeda1.png"),
        require("../assets/moeda2.png"),
        require("../assets/moeda3.png"),
        require("../assets/moeda4.png"),
        require("../assets/moeda5.png"),
        require("../assets/moeda6.png"),
        require("../assets/moeda7.png"),
        require("../assets/moeda8.png")
    ]
    let iMoeda = 0;
    let maxGiro = Globais.qtGiro;
    let tmpEs = Globais.tmpEsp;
    const [moedaAt, setMoedaAt] = useState(moedas[iMoeda]);

    async function espera(tmp){
        function tempo(ms){
            return new Promise(resolve=>setTimeout(resolve, ms));
        }
        await tempo(tmp)
    }

    async function giraMoeda(){
        maxGiro = Globais.qtGiro;
        tmpEs = Globais.tmpEsp;
        for(let i=0;i<(maxGiro*8);i++){
            iMoeda++
            if(iMoeda>7){
                iMoeda=0
            }
            setMoedaAt(moedas[iMoeda])
            await espera(tmpEs)
        }
        let res=Math.floor(Math.random()*10)+1;
        if(res<=5){
            res=0
        }
        else{
            res=4
        }
        setMoedaAt(moedas[res])
    }

    return(
        <SafeAreaView style={estilo.conteiner}>
            <View style={{width:"100%"}}>
                <Text>Cara ou coroa</Text>
                <Image source={moedaAt} style={estilo.imagem}/>
                <Button 
                    title="Jogar"
                    onPress={giraMoeda}
                    style={estilo.but}
                />
            </View>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    conteiner:{
       flex:1,
       justifyContent: "center",
       alignItems: "center"
    },
    imagem:{
        width:"100%",
        resizeMode:"contain"
    },
    but:{
        width:"50%",
        borderRadius:15
    }
})