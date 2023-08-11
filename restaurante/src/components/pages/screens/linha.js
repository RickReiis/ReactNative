import React from "react";
import {View, Text, Button} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome';


export default function(props){
    return(
        <View style={{flexDirection:'row', marginTop:1}}>
            <View style={{flex:5}}>
                <Text style={{textAlign:"justify", fontSize:16}}>{props.data.nome}</Text>
            </View>
            <View style={{flex:4}}>
                <Text style={{textAlign:"justify", fontSize:16}}>{props.data.funcao}</Text>
            </View>
            <View style={{flex:2, flexDirection:"row"}}>
                <Icon name="pencil" size={16} color="#000"/>
                {
                    props.data.status==1?<Icon name="unlock" size={16} color="#000"/>:<Icon name="lock" size={16} color="#000"/>
                }
            </View>
        </View>
    )
}