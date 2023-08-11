import React, {useState} from "react";
import {View, Text, Modal, Button, StyleSheet} from "react-native";


export default function () {
    const [visivel, setVisivel] = useState(false);
    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visivel}
            >
                <View style={estilo.modal}>
                    <Text style={{fontSize:20}}> oi</Text>
                    <Button 
                        title="Fechar"
                        onPress={()=>setVisivel(false)}
                    />
                </View>
            </Modal>
            <Text>
                não sou modal
            </Text>
            <Button 
                    title="Abrir"
                    onPress={()=>setVisivel(true)}
                />
        </View>
    )
}

const estilo = StyleSheet.create({
    modal:{
        backgroundColor: "#555",
        margin: 15,
        padding: 10,
        borderRadius: 15,
        elevation: 10
    }
})