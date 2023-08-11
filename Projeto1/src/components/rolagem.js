import React, {useState} from "react";
import {View, Text, ScrollView, RefreshControl} from "react-native";


export default function () {

    const [atualizando, setAtualizando] = useState(false)
    const aoAtualizar = ()=>{

        //código de atualização

        setAtualizando(true)
        setTimeout(()=>{setAtualizando(false)}, 2000)
    }

    return(
        <View>
            <ScrollView 
                style={{backgroundColor:"#777"}}
                refreshControl={
                    <RefreshControl 
                        refreshing={atualizando}
                        onRefresh={aoAtualizar}
                    />
                }
            >
                <Text style={{color:"#fff", margin:10}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sodales turpis sed tellus dapibus placerat. Proin euismod a libero ut cursus. Curabitur a risus lorem. Mauris sit amet enim a odio commodo vulputate. Nunc pretium vulputate tortor. Quisque quis consequat magna. Quisque pretium tempor nisi nec tincidunt. Cras congue ut lorem porta auctor. Vivamus fermentum ex fringilla ante efficitur, pharetra vehicula odio pharetra. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor, arcu et placerat semper, metus felis euismod nisl, nec molestie sem diam vitae turpis. Etiam vitae arcu id lacus fermentum tristique sed sed mauris.

Pellentesque volutpat arcu ac pharetra imperdiet. Etiam sed nisi velit. Quisque ac posuere lectus. Aliquam ac sem nibh. Nullam volutpat, magna a aliquam posuere, turpis metus faucibus est, eu commodo augue purus sed elit. Mauris mollis, ligula et tincidunt porta, tellus nulla tincidunt metus, in laoreet libero lectus aliquet libero. Sed porttitor tristique nunc aliquet dignissim. In et rhoncus orci, ac egestas est. Ut eleifend purus quam, et imperdiet mi porta quis. Duis orci purus, ullamcorper nec consequat nec, varius eget risus. Quisque venenatis imperdiet lorem feugiat faucibus. Donec pharetra, libero at cursus scelerisque, leo neque facilisis justo, sed consequat ligula odio vel mauris. Pellentesque sed scelerisque orci, ut finibus justo. Proin pretium nisi vitae risus volutpat, imperdiet blandit risus interdum. Morbi vitae dui venenatis, pretium dolor ac, cursus quam.

Morbi porttitor tristique nunc ut tincidunt. Ut vel porta libero. Ut et sapien ut augue accumsan tristique. Phasellus molestie bibendum ante, nec ultricies est laoreet eget. Nulla dapibus bibendum risus. Duis dolor tellus, rhoncus ac condimentum vel, malesuada in risus. Sed id nulla interdum quam pretium venenatis sed non ligula. Aenean iaculis convallis sapien nec ultrices.

Maecenas ac commodo risus. Curabitur tincidunt pretium nibh eu vulputate. Donec eget metus consectetur, finibus dolor at, tincidunt augue. Donec semper iaculis mi, nec viverra risus ultricies non. Nulla cursus fermentum justo, vitae tempus nulla dapibus et. Donec sollicitudin leo dui, nec sagittis erat pulvinar aliquet. Aliquam sed nunc rutrum, faucibus lacus vel, tincidunt est. Quisque finibus lorem gravida sollicitudin consectetur. Suspendisse consequat mi a mi hendrerit scelerisque. Sed dignissim consequat iaculis. Integer sit amet sapien id sapien tempus pharetra sit amet varius felis.

In porta fringilla lorem non vestibulum. Etiam vitae leo non eros cursus molestie eget ac dolor. Praesent a auctor lacus. Integer tempor elit sed fermentum tristique. Duis imperdiet ipsum a odio lobortis suscipit.
                </Text>
            </ScrollView>
        </View>
    )
}