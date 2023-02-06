import React from 'react';
import {Text} from 'react-native';

import estilo from './estilo';

export default props => {
  //   console.warn(props);
  return (
    <Text style={estilo.fontG}>
      O Valor {props.max} é maior que o valor {props.min}
    </Text>
  );
};
