import React, { Fragment } from 'react';

import {
    Image, 
    Text
} from 'react-native';

import estilo from "./estilo";

const Foto = ({urlFoto, descricao}) =>{
    return (
        <Fragment>
            <Image 
                source={{uri : urlFoto}} 
                style={estilo.imagem}
            />
            <Text>{descricao}</Text>
        </Fragment>
    );
}

export default Foto;