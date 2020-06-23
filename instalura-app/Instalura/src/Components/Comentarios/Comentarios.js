import React, { Fragment, useState } from 'react';

import {
    Image, 
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TextInput
} from 'react-native';
import estilo from '../Comentarios/estilo';

const Comentarios = ( {comentarios} ) => {
    
    return (
        <Fragment>
            <FlatList
                data={comentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                <Text>{item.text}</Text>}
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput 
                    placeholder={"Deixe seu comentário..."}
                    //faz o textinput ocupar toda a largura da tela
                    style={{flex:1}}
                />
                <TouchableOpacity>
                    <Image 
                        source={require("../../../res/img/send.png")}
                        style={estilo.imgSend}/>
                </TouchableOpacity>
            </View>
        </Fragment>
    );

};

export default Comentarios;