import React, {useEffect, useState} from "react"
import {View, Text, Flatlist, ActivityIndicator} from "react-native"

export default function(){
    const [carregando, setCarregando] = useState(true)
    const [dados, setDados] = useState([])

    useEffect(
        ()=>{
            fetch("https://e260-170-79-230-211.sa.ngrok.io")
                .then((resp)=>resp.json())
                .then((json)=>setDados(json[0].username))
                .catch(()=>(alert("Erro ao carregar")))
                .finally(()=>setCarregando(false))
        }
    )
    return(
        <View>
            {
                carregando? <ActivityIndicator/>: (
                    <Text>{dados}</Text>
                )
            }
        </View>
    )
}