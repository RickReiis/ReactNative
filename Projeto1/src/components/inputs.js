import React, {useState} from "react";
import {View, Text, TextInput} from "react-native";

export default function () {

    const [nome, setNome] = useState("Rick");

    return(
        <View>
            <Text>Digite algo:</Text>
            <TextInput
                style={{borderWidth:1, borderColor:"#000"}}
                value={nome}
                onChangeText={text=>setNome(text)}
                multiline={true}
            />
            <Text>{nome}</Text>
        </View>
    )
}