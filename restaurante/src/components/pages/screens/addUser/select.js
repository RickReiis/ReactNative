import React,{useState} from "react";
import {View, Text, TouchableHighlight, Modal, FlatList} from "react-native";
import Icon2 from "react-native-vector-icons/EvilIcons";

const categorias = [
    {
        id:0, nome:"Gerente"
    },
    {
        id:1, nome:"Balconista"
    },
    {
        id:2, nome:"Entregador"
    },
    {
        id:3, nome:"Aux. Administrativo"
    },
]


export default function(){
    const [visivel, setVisivel] = useState(false);
    const [opcao, setOpcao] = useState("Selecionar");
    function sel(prop){
        setVisivel(false)
        setOpcao(prop)
    }
    return(
        <View style={{marginBottom:10}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visivel}
                onRequestClose={()=>setVisivel(false)}
            >
                <View style={{padding:10}}>
                    <FlatList
                        data={categorias}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>
                        <TouchableHighlight
                            onPress={()=>sel(item.nome)}
                            underlayColor="#898989"
                            style={item.nome==opcao?{backgroundColor:"#898989"}:{backgroundColor:"#fff"}}
                        >
                            <Text style={{fontSize:20, fontWeight:"600", }}>{item.nome}</Text>
                        </TouchableHighlight>
                    }
                    />
                </View>
            </Modal>
            <View>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#000"}}>Função</Text>
            </View>
            <TouchableHighlight 
                underlayColor="#898989"
                style={{borderWidth:1, borderRadius:5, borderColor:"#000", padding:5}}
                onPress={()=>{setVisivel(true)}}
            >
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"row", flex:1}}>
                        <Text style={{fontSize:16, color:"#000"}}>{opcao}</Text>
                    </View>
                    <View style={{flexDirection:"row-reverse", flex:1}}>
                        <Icon2 name="chevron-down" size={30} color="#000"/>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}