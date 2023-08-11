import React, {Component} from "react";
import {View, Text, Button} from "react-native";

export default class carro extends Component{
    state={
        ligado:true
    }
    render(props){
        return(
            <View>
                <Text>Carro: {this.props.nome} - Ligado: {this.state.ligado?'Ligado':'Desligado'}</Text>
                <Button
                    title={this.state.ligado?'Desligar':'Ligar'}
                    onPress={()=>{this.setState({ligado:!this.state.ligado})}}
                />
            </View>
        )
    }
}