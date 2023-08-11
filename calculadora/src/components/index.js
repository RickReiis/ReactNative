import React, {useState} from "react";
import {View, Text, SafeAreaView, StyleSheet, TextInput} from "react-native";
import But from "./but";

let estados = {
    valorTela:'',
    resultado:0,
    operado:false,
    ponto:false,
    zero:true
}

export default function(){
    const [tela, setTela] = useState(estados.valorTela);
    const [res, setRes] = useState(estados.resultado);

    const loga = (a)=>{
        if(a=="AC"){
            estados = {
                valorTela:'',
                resultado:0,
                operado:false,
                ponto:false,
                zero:true
            }
            setTela(estados.valorTela);
            setRes(estados.resultado);
            return
        }
        if(a=="<-"){
            if(estados.operado==false){
                if(tela==0){
                    if(estados.ponto==true){
                        estados.valorTela=0;
                        setTela(estados.valorTela)
                        estados.ponto=false;
                        estados.zero = true
                        return
                    }
                    return
                }
                else if(tela.length==1){
                    estados.valorTela=0;
                    setTela(estados.valorTela)
                    estados.ponto=false
                    estados.zero=true
                    return
                }
                else {
                    let tama = estados.valorTela.length
                    let carac = tela.substring((tama-1),tama);
                    if(carac=="+"||carac=="-"||carac=="/"||carac=="*"){
                        estados.valorTela=tela.substring(0,(tama-1));
                        setTela(estados.valorTela)
                        let r = estados.valorTela
                        carac = r.substring((r.length-1),r.length);
                        //procura ponto no número e caso encontre, ponto recebe true
                        for (let i = r.length-1; ((carac>=0&&carac<=9)||carac==")") && i>=0; i--) {
                            if(r.substring((i-1), i)=="."){
                                estados.ponto=true
                            }
                            else {
                                estados.ponto=false
                            }
                            carac = r.substring((i-1), i)
                        }
                        //verivica se o número é zero
                        if(!estados.ponto){
                            let uns = r.substring((r.length-1), r.length)
                            let pns = r.substring((r.length-2), r.length-1)
                            if(r.length>1){
                                if(uns==0){
                                    if(pns>=0&&pns<=9){
                                        estados.zero = false
                                    }
                                    else {
                                        estados.zero = true
                                    }
                                }
                                else {
                                    estados.zero = false
                                }
                            }
                            else {
                                if(uns==0){
                                    estados.zero = true
                                }
                            }
                        }
                        else {
                            let contr = 0
                            let uns = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                            for(let i = estados.valorTela.length-1; ((uns>=0&&uns<=9)||uns==".")&&i>=0; i--){
                                if(uns==0) {
                                        contr=contr+1
                                }
                                uns = estados.valorTela.substring((i-1),i)
                            }
                            if(contr<estados.valorTela.length-1){
                                estados.zero = false
                            }
                            else {
                                estados.zero = true
                            }
                        }
                        return                        
                    }
                    if(carac=="."){
                        estados.valorTela=tela.substring(0,(tela.length-1));
                        setTela(estados.valorTela)
                        estados.ponto=false
                        let contr = 0
                        let uns = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                        for(let i = estados.valorTela.length-1; (uns>=0&&uns<=9)&&i>=0; i--){
                            if(uns==0) {
                                    contr=contr+1
                            }
                            uns = estados.valorTela.substring((i-1),i)
                        }
                        if(contr<estados.valorTela.length-1){
                            estados.zero = false
                            return
                        }
                        else {
                            estados.zero = true
                        }
                        console.log(estados.zero)
                        return
                    }
                    else {
                        estados.valorTela=tela.substring(0,(tela.length-1));
                        let len = estados.valorTela.length
                        let ucs = estados.valorTela.substring((len-1), len)
                        if(ucs=="+"||ucs=="-"||ucs=="*"||ucs=="/"||ucs=="("){
                            estados.zero = true
                        }
                        setTela(estados.valorTela)
                        return
                    }
                }
                return
            }
            else{
                estados.resultado=0
                setRes(estados.resultado)
                estados.operado=false
                return
            }
            
        }
        if(a>="0"&&a<="9"){
            if(estados.operado==false){
                if(estados.ponto==true){
                    estados.valorTela=estados.valorTela+a
                    setTela(estados.valorTela)
                    return
    
                }
                else {
                    if(estados.valorTela==0){
                        if(a>0){
                            estados.zero=false
                        }
                        estados.valorTela=a
                        setTela(estados.valorTela)
                        return
                    }
                    else if(estados.zero){
                        if(a>0){
                            let car = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                            estados.zero=false
                            if(car==0){
                                estados.valorTela=estados.valorTela.substring(0, estados.valorTela.length-1)+a
                            }
                            else{
                                estados.valorTela=estados.valorTela+a
                            }
                            setTela(estados.valorTela)
                            return
                        }
                        else {
                            let car = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                            if(car!=0){
                                estados.valorTela=estados.valorTela+a
                                setTela(estados.valorTela)
                                return
                            }
                        }
                        return
                    }
                    else {
                        estados.valorTela=estados.valorTela+a
                        setTela(estados.valorTela)
                        return
                    }
                    
                }
            }
            else {
                estados = {
                    valorTela:a,
                    resultado:0,
                    operado:false,
                    ponto:false
                }
                setTela(estados.valorTela);
                setRes(estados.resultado);
                estados.operado=false
                return
            }
            
        }
        if(a=="."){
            if(estados.operado==false){
                if(estados.ponto==false){
                    if(tela==0){
                        estados.valorTela=estados.valorTela+a;
                        setTela(estados.valorTela)
                        estados.ponto=true
                        return
                    }
                    if(tela.substring((tela.length-1),tela.length)>=0||tela.substring((tela.length-1),tela.length)<=9){
                        estados.valorTela=estados.valorTela+a;
                        setTela(estados.valorTela)
                        estados.ponto=true
                        return
                    }
                    return
                }
                return
            }
            else {
                estados = {
                    valorTela:"0"+a,
                    resultado:0,
                    operado:false,
                    ponto:true
                }
                setTela(estados.valorTela)
                setRes(estados.resultado)
                return
            }
            
        }
        if(a=="+"||a=="-"||a=="/"||a=="*"){
            if(estados.operado==false){
                let r = tela.substring((tela.length-1), tela.length)
                if(tela == 0||r>=0||r<=9||r==")"||(r=="(" && (a=="+"||a=="-"))){
                    estados.valorTela=estados.valorTela+a;
                    setTela(estados.valorTela)
                    estados.ponto=false
                    estados.zero=true
                    return
                }
                if(r=="."){
                    estados.valorTela=estados.valorTela+"0"+a;
                    setTela(estados.valorTela)
                    estados.ponto=false
                    estados.zero=true
                    return
                }
                return
            }
            else {
                if(estados.resultado<0){
                    estados.resultado="("+estados.resultado+")"
                }
                estados = {
                    valorTela:estados.resultado+a,
                    resultado:estados.resultado,
                    operado:false,
                    ponto:false,
                    zero:true
                }
                setTela(estados.valorTela)
                setRes(estados.resultado)
                return
            }
            
        }
        if(a=="("){
            if(estados.operado==false){
                if(tela.length==1||tela==0){
                    estados.valorTela=a+estados.valorTela;
                    setTela(estados.valorTela)
                    return
                }
                if(tela.length>1){
                    let r = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                    if(r=="+"||r=="-"||r=="/"||r=="*"||r=="("){
                        estados.valorTela=estados.valorTela+a;
                        setTela(estados.valorTela)
                        return
                    }
                    else if(r=="."){
                        estados.valorTela=estados.valorTela+"0"+a;
                        setTela(estados.valorTela)
                        return
                    }
                    return
                }
                return
            }
            else {
                estados = {
                    valorTela:a,
                    resultado:0,
                    operado:false,
                    ponto:false
                }
                setTela(estados.valorTela)
                setRes(estados.resultado)
                return
            }
            
        }
        if(a==")"){
            if(tela!=0){
                let r = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
                let ap = 0;
                let fp = 0;
                for(let i = 0; i<=estados.valorTela.length;i++){
                    if(r=="("){
                        ap++;
                    }
                    else if(r==")"){
                        fp++;
                    }
                    r=estados.valorTela.substring((i-1), i)

                }
                if(fp<ap){
                    if((r>=0 && r<=9)||r==")"){
                        estados.valorTela=estados.valorTela+a;
                        setTela(estados.valorTela)
                        return 
                    }
                    if(r=="(" || r=="."){
                        estados.valorTela=estados.valorTela+"0"+a;
                        setTela(estados.valorTela)
                        return 
                    }
                }
            }
        }
        if(a=="="){
            let r = estados.valorTela.substring((estados.valorTela.length-1), estados.valorTela.length)
            let ap = 0;
            let fp = 0;
            for(let i = 0; i<=estados.valorTela.length;i++){
                if(r=="("){
                    ap++;
                }
                else if(r==")"){
                    fp++;
                }
                r=estados.valorTela.substring((i-1), i)

            }
            for(let i = fp;ap>i;i++){
                estados.valorTela=estados.valorTela+")"
                setTela(estados.valorTela)
            }
            estados.resultado=parseFloat((eval(estados.valorTela)).toFixed(10));
            setRes(estados.resultado)
            estados.ponto=false
            estados.operado=true
            return
        }
            
    }

    return(
        <SafeAreaView>
            <View style={estilo.display}>
                <View style={estilo.camp}>
                    <Text style={{fontSize:40, color:"#FFF"}}>{tela}</Text>
                </View>
                <View style={estilo.camp}>
                    <Text style={{fontSize:60, color:"#FFF"}}>{res}</Text>
                </View>
            </View>
            <View style={{height:"80%"}}>
                <View style={estilo.linhas}>
                    <But tit="AC" cor="#FFE001" fun={()=>{loga('AC')}}/>
                    <But tit="(" cor="#FFF" fun={()=>{loga('(')}}/>
                    <But tit=")" cor="#FFF" fun={()=>{loga(')')}}/>
                    <But tit="/" cor="#1AD900" fun={()=>{loga('/')}}/>
                </View>
                <View style={estilo.linhas}>
                    <But tit="7" cor="#FFF" fun={()=>{loga('7')}}/>
                    <But tit="8" cor="#FFF" fun={()=>{loga('8')}}/>
                    <But tit="9" cor="#FFF" fun={()=>{loga('9')}}/>
                    <But tit="*" cor="#1AD900" fun={()=>{loga('*')}}/>
                </View>
                <View style={estilo.linhas}>
                    <But tit="4" cor="#FFF" fun={()=>{loga('4')}}/>
                    <But tit="5" cor="#FFF" fun={()=>{loga('5')}}/>
                    <But tit="6" cor="#FFF" fun={()=>{loga('6')}}/>
                    <But tit="-" cor="#1AD900" fun={()=>{loga('-')}}/>
                </View>
                <View style={estilo.linhas}>
                    <But tit="1" cor="#FFF" fun={()=>{loga('1')}}/>
                    <But tit="2" cor="#FFF" fun={()=>{loga('2')}}/>
                    <But tit="3" cor="#FFF" fun={()=>{loga('3')}}/>
                    <But tit="+" cor="#1AD900" fun={()=>{loga('+')}}/>
                </View>
                <View style={estilo.linhas}>
                    <But tit="0" cor="#FFF" fun={()=>{loga('0')}}/>
                    <But tit="." cor="#FFF" fun={()=>{loga('.')}}/>
                    <But tit="<-" cor="#03A5FC" fun={()=>{loga('<-')}}/>
                    <But tit="=" cor="#D60101" fun={()=>{loga('=')}}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const estilo = StyleSheet.create({
    display:{
        backgroundColor:"#6E6E6E",
        height:"20%",
        padding:10,
        flexDirection:"column",
        justifyContent:"flex-end"
    },
    camp:{
        flexDirection:"row",
        justifyContent:"flex-end"
    },
    linhas:{
        flexDirection:"row",
        with:"100%",
        height:"20%"
    }
})