import React, {useState} from "react";
import { View, Text, TouchableHighlight } from "react-native";
import Icon1 from "react-native-vector-icons/MaterialCommunityIcons"


export default function(prop1){
    const [check, setCheck] = useState(false)
    function update(){
        let retorno = prop1.fun(prop1.nome)
        if(retorno==-1){
            setCheck(true)
        }
        else{
            setCheck(false)
        }
    }
    return(
        <View>
            <TouchableHighlight
                onPress={()=>update()}
                underlayColor="#898989"
            >   
                <View style={{flexDirection:"row"}}>
                    <View>
                        {
                            check?<Icon1 name="checkbox-outline" size={30} color="#000"/>:<Icon1 name="checkbox-blank-outline" size={30} color="#000"/>
                        }
                    </View>
                    <View>
                        <Text style={{fontSize:20, fontWeight:"600", }}>{prop1.nome}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}