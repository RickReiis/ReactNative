import React, {useState} from "react";
import { SafeAreaView, Text, View, Button} from "react-native";
import Calc from "./calcIMC/index.js";
import CalcComb from "./navStack";
import Style from "../styles/style.js";

export default function(){
  return(
    <SafeAreaView>
      <CalcComb/>
    </SafeAreaView>
  )
}