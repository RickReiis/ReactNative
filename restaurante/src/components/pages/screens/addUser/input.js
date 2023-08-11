import React from "react";
import {View, Text, TextInput} from "react-native"

export default function(prop){
    return(
        <View style={{marginBottom:10}}>
            <View>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#000"}}>{prop.txt}</Text>
            </View>
            <View>
                <TextInput style={{borderWidth:1, borderRadius:5, borderColor:"#000"}}/>
            </View>
        </View>
    )
}