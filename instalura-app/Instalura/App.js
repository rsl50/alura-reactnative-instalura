import React, {Fragment, useState, useEffect} from 'react';

import {
  ScrollView,
  FlatList
} from 'react-native';

import { Cabecalho } from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto'
import lerFotos from './src/api/feed';

const App = () => {
  //variavel do meu estado: fotos
  //funcao a ser chamada ao alterar o estado: setFotos
  const [fotos, setFotos] = useState([])
  
  //useEffect não premite retorno, por isso declaramos uma função dentro de outra para fazer o fetch
  useEffect(() => {
    lerFotos(setFotos);
  },[])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho 
              nomeUsuario={item.userName} 
              urlImage={item.userURL}
            />
            <Foto
              urlFoto={item.url}
              descricao={item.description}
            /> 
          </Fragment>    
        }
      />
    </ScrollView>    
  )
};

export default App;
