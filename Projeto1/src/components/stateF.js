import React, {useState} from "react";
import {View, Text, Switch} from "react-native";

export default function(prop){

    const [ligado, setLigado] = useState(true)
    const toggleLigado  = ()=>{setLigado(!ligado)}

    return(
        <View>
            <Text>Carro: {prop.nome} - Ligado: {ligado?'Ligado':'Desligado'}</Text>
            <Switch
                trackColor={{false:'#777', true:'#8bf'}}
                thumbColor={ligado? '#00f' : '#444'}
                value={ligado}
                onValueChange={toggleLigado}
            />
        </View>
    )
}