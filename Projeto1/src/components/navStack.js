import { NavigationContainer } from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import React, {useState} from "react";
import { SafeAreaView, Text, View, Button} from "react-native";
import Style from "../styles/style.js";
//import Rl from "./rolagem";

const Pilha = createNativeStackNavigator()

function Home({navigation}){
  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Home</Text>
      <Button
        title="Página 1"
        onPress={()=>navigation.navigate('Página 1')}
      />
    </View>
  )
}

function Pagina1({navigation}){
  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Página 1</Text>
      <Button
        title="Voltar"
        onPress={()=>navigation.goBack()}
      />
      <Button
      title="Página 2"
      onPress={()=>navigation.navigate("Página 2",{param1:"P1", param2:"p2"})}
    />
    </View>
  )
}

function Pagina2({route, navigation}){
  const {param1} = route.params;
  const {param2} = route.params;

  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Página 2</Text>
      <Text>Parametro 1: {param1}</Text>
      <Text>Parametro 2: {param2}</Text>
      <Button
        title="Voltar"
        onPress={()=>navigation.goBack()}
      />
    </View>
  )
}
export default function(){
  return(
    <NavigationContainer>
      <Pilha.Navigator initialRouteName="Home">
        <Pilha.Screen
          name="Home"
          component={Home}
          options={{
            title:'Tela inicial',
            headerStyle:{
              backgroundColor:"#11e"
            },
            headerTintColor:"#fff",
            headerRight:()=>(
              <Button
                title="Página 2"
                color="#000"
                onPress={()=>alert("Botão de página clicado!")}
              />
            )
          }}
        />
        <Pilha.Screen
          name="Página 1"
          component={Pagina1}
          options={{
            title:'Página 1',
            headerStyle:{
              backgroundColor:"#11e"
            },
            headerTintColor:"#fff"
          }}
        />
        <Pilha.Screen
          name="Página 2"
          component={Pagina2}
          options={{
            title:'Página 2',
            headerStyle:{
              backgroundColor:"#11e"
            },
            headerTintColor:"#fff"
          }}
        />
      </Pilha.Navigator>
    </NavigationContainer>
  )
}
