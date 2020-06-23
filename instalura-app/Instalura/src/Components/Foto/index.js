import React from 'react';

import {
    Image, 
    View
} from 'react-native';

import estilo from "./estilo";

const Foto = () =>{
    return (
        <View style={estilo.imagem}>
            <Image 
                source={require("../../../res/img/alura.jpg")} 
                style={estilo.imagem}
            />
        </View>
    );
}

export default Foto;