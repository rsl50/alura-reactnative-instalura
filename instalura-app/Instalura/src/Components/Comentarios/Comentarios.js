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
    const [estadoComentarios, setComentarios] = useState(comentarios)

    const adicionarComentario = () => {
        console.warn(conteudoCampoInput);
        
        //Limpa campo input
        campoInput.clear();
        
        //Cria novo comentário
        const novoComentario = {
            date: Date.now(),
            text: conteudoCampoInput,
            userName: "Bugman"
        }

        // Adiciona novo comentário ao comentários existentes
        setComentarios([...estadoComentarios, novoComentario]);
    }


    // armazena texto do comentario
    let conteudoCampoInput = "";
    let campoInput;

    return (
        <Fragment>
            <FlatList
                data={estadoComentarios}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) =>
                    <View style={estilo.naMesmaLinha}>
                        <Text>{item.userName} </Text>
                        <Text> {item.text}</Text>
                    </View>
                }
            />
            <View style={estilo.naMesmaLinha}>
                <TextInput 
                    // envia a referencia do componente para campoInput
                    ref={textInput => campoInput = textInput}
                    // o callback de onChangeText é armazenado na variavel texto
                    onChangeText={texto => conteudoCampoInput = texto}
                    placeholder={"Deixe seu comentário..."}
                    //faz o textinput ocupar toda a largura da tela
                    style={{flex:1}}
                />
                <TouchableOpacity onPress={adicionarComentario}>
                    <Image 
                        source={require("../../../res/img/send.png")}
                        style={estilo.imgSend}/>
                </TouchableOpacity>
            </View>
        </Fragment>
    );

};

export default Comentarios;