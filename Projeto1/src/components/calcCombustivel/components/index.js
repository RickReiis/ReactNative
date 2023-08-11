import React, {useState} from "react";
import { SafeAreaView, StyleSheet, ScrollView } from "react-native";
import Inp from "./inp.js";
import But from "./botao.js";
import Img from "./imagem.js";
import Res from "./resul.js";

export default function(){

    const [gasolina, setGasolina] = useState(0);
    const [etanol, setEtanol] = useState(0);
    const [resultado, setResultado] = useState(0);

    const calcular = ()=>{
        if(!gasolina){
            alert("Preencha o valor da gasolina!")
            return
        }
        if(!etanol){
            alert("Preencha o valor do etanol!")
            return
        }
        setResultado((etanol*100)/gasolina)
    }

    const limpar = ()=>{
        setResultado(0)
    }

    const setarGasolina = (v)=>{
        limpar()
        setGasolina(v)
    }

    const setarEtanol = (v)=>{
        limpar()
        setEtanol(v)
    }
    return(
        <SafeAreaView>
            <ScrollView>
                <Inp aoMod={setarGasolina} tit="Preço da gasolina:"/>
                <Inp aoMod={setarEtanol} tit="Preço do etanol:"/>
                <But aoClic={calcular}/>
                <Res result={resultado}/>
                <Img result={resultado}/>
            </ScrollView>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({

})