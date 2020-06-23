import React, {Fragment, useState, useEffect} from 'react';

import {
  ScrollView,
  FlatList
} from 'react-native';

import { Cabecalho } from './src/Components/Cabecalho';
import {Foto} from './src/Components/Foto'

const App = () => {
  //variavel do meu estado: fotos
  //funcao a ser chamada ao alterar o estado: setFotos
  const [fotos, setFotos] = useState([])
  //useEffect não premite retorno, por isso declaramos uma função dentro de outra para fazer o fetch
  useEffect(()=>{
    const lerFotos = async() =>{
      //usar o ip da máquina no fetch ao invés de localhost
      const fotosHTTP  = await fetch("http://localhost:3030/feed");
      //converte resposta em json
      const fotosJson = await fotosHTTP.json();
      //captura as fotos do json
      setFotos(fotosJson);
    }

    lerFotos();
  },[])

  return (
    <ScrollView>
      <FlatList
        data={fotos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Fragment>
            <Cabecalho nomeUsuario={item.userName} />
            <Foto/> 
          </Fragment>    
        }
      />
    </ScrollView>    
  )
};

export default App;
