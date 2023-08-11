import React from "react";
import {View, Text, FlatList, StyleSheet}  from "react-native";

const produtos=[
    {
        id:'0',
        desc:['mouse', '30,00']
    },
    {
        id:'1',
        desc:['mesa', '400,00']
    },
    {
        id:'2',
        desc:['teclado', '50,00']
    },
    {
        id:'3',
        desc:['monitor', '700,00']
    },
    {
        id:'4',
        desc:['mouse', '30,00']
    },
    {
        id:'5',
        desc:['mesa', '400,00']
    },
    {
        id:'6',
        desc:['teclado', '50,00']
    },
    {
        id:'7',
        desc:['monitor', '700,00']
    },
    {
        id:'8',
        desc:['mouse', '30,00']
    },
    {
        id:'9',
        desc:['mesa', '400,00']
    },
    {
        id:'10',
        desc:['teclado', '50,00']
    },
    {
        id:'11',
        desc:['monitor', '700,00']
    }
]

export default function(){
    return(
        <View>
            <FlatList 
                data={produtos}
                keyExtractor={item=>item.id}
                renderItem={({item})=><View style={estilo.item}><Text style={estilo.prod}>Descrição:{item.desc[0]} - Valor:{item.desc[1]}</Text></View>}
            />
        </View>
    )
}

const estilo = StyleSheet.create({
    item:{
      backgroundColor:"#fff",
      padding: 15,
      marginVertical:8,
      marginHorizontal:16
    },
    prod:{
      color:"#000",
      fontSize:20
    }
  })