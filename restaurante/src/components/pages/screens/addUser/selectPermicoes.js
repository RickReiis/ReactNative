import React,{useState} from "react";
import {View, Text, TouchableHighlight, Modal, FlatList} from "react-native";
import Icon2 from "react-native-vector-icons/EvilIcons";
import But from "./but"

const categorias = [
    {
        id:0, nome:"Acessar página de Usuários"
    },
    {
        id:1, nome:"Acessar página de vendas"
    },
    {
        id:2, nome:"Acessar Rotas"
    },
    {
        id:3, nome:"Registrar venda"
    },
]


export default function(){
    const [visivel2, setVisivel2] = useState(false);
    const permicoes = [];
    permicoes[0] = "Selecionar"
    function sel(prop){
        let pos = permicoes.indexOf(prop)
        if(pos==-1){
            permicoes.push(prop)
        }
        else{
            permicoes.splice(pos, 1);
        }
        return pos    
    } 

    return(
        <View style={{marginBottom:10}}>
            <Modal
                animationType="slide"
                transparent={false}
                visible={visivel2}
                onRequestClose={()=>setVisivel2(false)}
            >
                <View style={{padding:10}}>
                    <FlatList
                        data={categorias}
                        keyExtractor={item=>item.id}
                        renderItem={({item})=>
                        <But fun={()=>sel(item.nome)} nome={item.nome}/>
                    }
                    />
                </View>
            </Modal>
            <View>
                <Text style={{fontSize:20, fontWeight:"bold", color:"#000"}}>Permições</Text>
            </View>
            <TouchableHighlight 
                underlayColor="#898989"
                style={{borderWidth:1, borderRadius:5, borderColor:"#000", padding:5}}
                onPress={()=>{setVisivel2(true)}}
            >
                <View style={{flexDirection:"row"}}>
                    <View style={{flexDirection:"row", flex:1}}>
                        <Text style={{fontSize:16, color:"#000"}}>Selecionar</Text>
                    </View>
                    <View style={{flexDirection:"row-reverse", flex:1}}>
                        <Icon2 name="chevron-down" size={30} color="#000"/>
                    </View>
                </View>
            </TouchableHighlight>
        </View>
    )
}