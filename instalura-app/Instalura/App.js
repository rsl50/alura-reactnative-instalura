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
  Dimensions
} from 'react-native'

const largura = Dimensions.get("screen").width

const App = () => {
  return (
    <ScrollView>
      <Text>Robson</Text>
      <Image 
        source={require("./res/img/alura.jpg")}
        style={{
          width:largura,
          height:largura
        }}
      />
      <Text>Julia</Text>
      <Image source={require("./res/img/alura.jpg")}
        style={{
          width:largura,
          height:largura
        }}
      />
    </ScrollView>    
  )
};


export default App;
