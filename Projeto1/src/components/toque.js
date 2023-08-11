import React, {useState} from "react";
import {View, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, StyleSheet} from "react-native";

export default function () {
    const [cont, setCont] = useState(0);
    const contador = ()=> {
        setCont(cont+1)
    }
    return(
        <View>
            <TouchableHighlight
                style={estilos.botao}
                onPress={contador}
            >
                <Text>High Light</Text>
            </TouchableHighlight>
            <Text>{cont}</Text>
            <TouchableOpacity
                style={estilos.botao}
                onPress={contador}
            >
                <Text>Opacity</Text>
            </TouchableOpacity>
            <Text>{cont}</Text>
            <TouchableWithoutFeedback
                style={estilos.botao}
                onPress={contador}
            >
                <Text>Without Feedback</Text>
            </TouchableWithoutFeedback>
            <Text>{cont}</Text>
        </View>
    )
}

const estilos = StyleSheet.create({
    botao:{
        backgroundColor:"#777",
        padding:10,
        alignItems:"center"
    }
})