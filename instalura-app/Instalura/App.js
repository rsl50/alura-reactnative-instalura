/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  Text,
  Image, 
  ScrollView,
  Dimensions,
  StyleSheet,
  FlatList
} from 'react-native'
import Cabecalho from './src/Components/Cabecalho';

const largura = Dimensions.get("screen").width
const informacoes = [
  {id:1, usuario:"Robson"},
  {id:2, usuario:"Julia"},
  {id:3, usuario:"Ricardo"},
]

const App = () => {
  return (
    <ScrollView>
      <FlatList
        data={informacoes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.usuario} />
            <Image 
              source={require("./res/img/alura.jpg")}
              style={estilo.imagem}
            />       
          </Fragment>    
        }
      />
    </ScrollView>    
  )
};

const estilo = StyleSheet.create({
  imagem:{
    width:largura,
    height:largura
  }
})

export default App;
