import React from "react";
import {View, Text, Button, Alert} from "react-native"
import {NavigationContainer} from "@react-navigation/native"
import {createDrawerNavigator} from "@react-navigation/drawer"
import Aba1 from "./screens/usuario"
import Aba2 from "./screens/aba2"

function Aba3({navigation}){
    function Oi(){
        
        if(1==1){
            console.log("Pagina 3")
        navigation.navigate('Aba2')
        }
    }
    return(
        <View>
            <Text>aba3</Text>
            <Button
        title="Página 2"
        onPress={Oi}
      />
        </View>
    )
}



const Gaveta = createDrawerNavigator()

export default function MinhaGaveta(){
    return(
        <Gaveta.Navigator useLegacyImplementation>
            <Gaveta.Screen name="Aba1" component={Aba1} options={{headerShown: false}}/>
            <Gaveta.Screen name="Aba2" component={Aba2}/>
            <Gaveta.Screen name="Aba3" component={Aba3}/>
        </Gaveta.Navigator>
    )
}


