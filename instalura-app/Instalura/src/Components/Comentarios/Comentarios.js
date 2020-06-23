import React, { Fragment, useState } from 'react';

import {
    Image, 
    Text,
    TouchableOpacity,
    View,
    FlatList
} from 'react-native';

const Comentarios = ( {comentarios} ) => {
    
    return (
        <FlatList
            data={comentarios}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) =>
            <Text>{item.text}</Text>
        }
        />
    );

};

export default Comentarios;