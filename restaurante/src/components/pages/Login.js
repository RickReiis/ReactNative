import React from 'react'
import {View, Text, TextInput, StyleSheet, TouchableHighlight} from 'react-native'
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
export default function({navigation}){
    
    return(
        <View style={estilo.bl1}>
            <View style={estilo.bl2}>
                <View style={estilo.bl3}>
                    <Text>Login</Text>
                    <TextInput
                    style={estilo.inp}
                    />
                </View>
                <View style={estilo.bl3}>
                    <Text>Senha</Text>
                    <TextInput
                    style={estilo.inp}
                    secureTextEntry={true}
                    />
                </View>
                <View style={estilo.bl3}>
                    <View style={estilo.blEsq}>
                        <TouchableHighlight 
                            style={estilo.but} 
                            onPress={()=>navigation.navigate('Home')}
                        >
                            <Text style={estilo.txtBut}>Enviar</Text>
                        </TouchableHighlight>
                    </View>                    
                </View>
            </View>
        </View>
    )
}

const estilo = StyleSheet.create({
    bl1:{
        alignItems: 'center',
        backgroundColor: '#E7E7E7',
        height: '100%',
        justifyContent:"center"        

    },
    bl2:{
        width: '75%',
        backgroundColor:"#fff",
        borderRadius: 5
    },
    bl3:{
        margin:10
    },
    inp:{
        fontSize:16,
        borderColor: '#D6D6D6',
        borderWidth: 1,
        borderRadius:5
    },
    blEsq:{
        alignSelf:'flex-end',
        width:'25%',
        
    },
    but:{
        backgroundColor:"#0093CF",
        height:35,
        width: '100%',
        borderRadius:3,
        justifyContent:'center'
    },
    txtBut:{
        fontSize:21,
        textAlign: 'center',
        fontWeight:'bold',
        color:"#fff"
    }
})