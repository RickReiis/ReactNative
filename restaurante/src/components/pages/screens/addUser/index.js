import React,{useState} from "react";
import {View, Text, TouchableHighlight, StyleSheet} from "react-native"
import Icon from 'react-native-vector-icons/EvilIcons';
import Inp from "./input"
import Select from "./select";
import Select2 from "./selectPermicoes";
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
export default function(prop){
    const [status, setStatus] = useState(false)
    function upStatus(){
        if(status){
            setStatus(false)
        }
        else{
            setStatus(true)
        }
    }

    const galeria = async () => {
        const result = await launchImageLibrary({mediaType:"photo"})
        console.log(result)
    }
    return(
        
            <View style={estilo.modal}>
                <View style={{flexDirection:"row-reverse", padding:10}}>
                    <TouchableHighlight
                        activeOpacity={0.85}
                        underlayColor="#C7C7C7"
                        onPress={()=>{prop.acao()}}
                        style={estilo.closeModal}
                    >
                        <Icon name="close" size={30} color="#898989"/>
                    </TouchableHighlight>
                </View>
                <View style={{padding:10}}>
                    <Inp txt="Nome"/>
                    <Inp txt="E-mail"/>
                    <Inp txt="Matrícula"/>
                    <Inp txt="Senha"/>
                    <Select/>
                    <Select2/>

                    <View style={{flexDirection:"row", marginBottom:10}}>
                        <View style={{flex:1, flexDirection:"row"}}>
                            <TouchableHighlight 
                                style={{borderWidth:1, borderRadius:5, borderColor:"#000"}}
                                onPress={()=>{galeria()}}
                            >
                                <View>
                                    <Icon name="image" size={50} color="#000"/>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View style={{flex:1, flexDirection:"row-reverse"}}>
                            <TouchableHighlight
                                activeOpacity={0.85}
                                underlayColor="#898989"
                                onPress={()=>upStatus()}
                                style={{borderWidth:1, borderRadius:5, borderColor:"#000"}}>
                                <View>
                                    {
                                        status?<Icon name="unlock" size={50} color="#000"/>:<Icon name="lock" size={50} color="#000"/>
                                    }
                                </View>
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={{marginTop:30}}>
                        <TouchableHighlight
                            onPress={()=>{}}
                            activeOpacity={0.85}
                            underlayColor="#f2f2f2" 
                            style={{borderRadius:30, backgroundColor:"#C70000"}}
                        >
                            <Text style={{fontSize:30, textAlign:"center", fontWeight:"bold", color:"#fff"}}>CADASTRAR</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
    )
}

const estilo = StyleSheet.create({
    modal:{
        flex:1
    },
    closeModal:{
        borderRadius:5,
        height:30,
        width:30,
        borderColor:"#898989",
        borderWidth:1,
        justifyContent:"center",
        alignContent:"center"
    }
})