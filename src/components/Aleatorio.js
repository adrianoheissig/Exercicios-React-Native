import React from 'react';
import {Text} from 'react-native';

import estilo from './estilo';

export default ({min, max}) => {
  const resultado = Math.ceil(Math.random() * (max - min) + min);
  return (
    <Text style={estilo.fontG}>
      O Valor entre {min} e {max} é {resultado}
    </Text>
  );
};
