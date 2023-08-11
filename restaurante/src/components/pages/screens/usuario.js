import React,{useState} from "react";
import {View, Text, TextInput, TouchableHighlight, FlatList, StyleSheet, Modal, Button, SafeAreaView} from "react-native"
import {NavigationContainer} from "@react-navigation/native"

import Icon from 'react-native-vector-icons/FontAwesome';
import Linha from "./linha";
import Mod from "./addUser"

const usuarios = [
    {
        id:'0',
        nome:'Carlos Alberto',
        funcao:'Balconista',
        status:0
    },
    {
        id:'1',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'2',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'3',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'4',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'5',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'6',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'7',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'8',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'9',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'10',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'11',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'12',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'13',
        nome:'Carlos Alberto',
        funcao:'Balconista',
        status:0
    },
    {
        id:'14',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'15',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'16',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'17',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'18',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'19',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'20',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'21',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'22',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'23',
        nome:'Juraci Augusto',
        funcao:'Entregador',
        status:1
    },
    {
        id:'24',
        nome:'Bruno Frata',
        funcao:'Balconista',
        status:1
    },
    {
        id:'25',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'26',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'27',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'28',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
    {
        id:'29',
        nome:'Ademar Barroso',
        funcao:'Entregador',
        status:1
    },
]

export default function Aba1({navigation}){
    const [visivel, setVisivel] = useState(false);
    return(
        <SafeAreaView style={estilo.fundo}>
            <Modal
            animationType="slide"
            transparent={false}
            visible={visivel}
            onRequestClose={()=>setVisivel(false)}
        >
            <Mod acao={()=>{setVisivel(false)}}/>
        </Modal>
            <View style={estilo.cabecalho}>
                <Text style={{fontSize:30, color:"#fff", fontWeight:"bold"}}>Usuários</Text>
            </View>
            <View style={estilo.corpo}>
                <View style={estilo.pesquisa}>
                    <View style={{flex:9}}>
                        <View style={{width:"80%", borderColor:"#898989", borderWidth:1, borderRadius:5}}>
                            <TextInput
                                placeholder="Pesquisar"
                            />
                        </View>
                    </View>
                    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
                        <TouchableHighlight
                            underlayColor="#C7C7C7"
                            style={estilo.addUser}
                            onPress={()=>{setVisivel(true)}}
                        >
                            <Icon name="user-plus" size={30} color="#898989" />
                        </TouchableHighlight>
                    </View>
                </View>
                <View>
                    <View style={estilo.cabecalhoTabela}>
                        <View style={{flex:5}}>
                            <Text style={{fontSize:16}}>NOME</Text>
                        </View>
                        <View style={{flex:4}}>
                            <Text style={{fontSize:16}}>FUNÇÃO</Text>
                        </View>
                        <View style={{flex:2}}>
                            <Text style={{fontSize:16}}>AÇÕES</Text>
                        </View>
                    </View>
                    
                    <View>
                        <FlatList
                            data={usuarios}
                            keyExtractor={item=>item.id}
                            renderItem={({item})=>
                            <Linha data={item}/>
                            }
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor: "#0071D5"
    },
    cabecalho:{
        flex:1,
        width:"100%",
        padding:10,
        justifyContent:"flex-end"
    },
    corpo:{
        flex:5,
        width:"100%",
        backgroundColor:"#fff",
        borderTopLeftRadius:20,
        borderTopRightRadius:20,
        padding:15
    },
    cabecalhoTabela:{
        marginTop:20,
        flexDirection:"row",
        borderBottomColor:"#898989",
        borderBottomWidth:2
    },
    pesquisa:{
        flexDirection:"row",
        width:"100%"
    },
    addUser:{
        borderRadius:5,
        height:40,
        width:40,
        borderColor:"#898989",
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center"
    }
})