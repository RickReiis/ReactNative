import React from "react";
import {Text, View} from "react-native";
const dobro=n=>n*2
export default function(prop) {
    return(
        <View>
            
            <Text style={{backgroundColor:prop.back}}>{dobro(prop.numb)}</Text>
        </View>
        
    )
}