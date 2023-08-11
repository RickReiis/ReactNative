import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from "react";
import {Text, View, Button} from "react-native";
import Style from "../styles/style.js";


const Guias = createBottomTabNavigator()

function Home({navigation}){
  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Home</Text>
    </View>
  )
}

function Pagina1({navigation}){
  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Página 1</Text>
    </View>
  )
}

function Pagina2({route, navigation}){
  return(
    <View style={Style.conteiner}>
      <Text>Navegação</Text>
      <Text>Página 2</Text>
    </View>
  )
}
export default function(){
  return(
    <NavigationContainer>
      <Guias.Navigator initialRouteName="Home">
        <Guias.Screen
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
        <Guias.Screen
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
        <Guias.Screen
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
      </Guias.Navigator>
    </NavigationContainer>
  )
}
