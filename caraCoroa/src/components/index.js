import React, {useState} from "react";
import {View, Text, SafeAreaView, StyleSheet, Image, Button} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Jogo from "./jogo"
import Con from "./config"

const Guias = createBottomTabNavigator()


export default function(){
    return(
        <NavigationContainer>
            <Guias.Navigator initialRouteName="Jogo">
                <Guias.Screen
                    name="Jogo"
                    component={Jogo}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color }) => (
                          <MaterialCommunityIcons name="home" color={color} size={26} />
                        ),
                      }}
                />
                <Guias.Screen
                    name="Configurações"
                    component={Con}
                />
            </Guias.Navigator>
        </NavigationContainer>
    )
}
