import React, {useState} from 'react';
import {Text} from 'react-native';

import estilo from '../estilo';
import ContadorBotoes from './ContadorBotoes';
import ContadorDisplay from './ContadorDisplay';

export default () => {
  const [num, setNum] = useState(0);

  const inc = () => setNum(num + 1);
  const dec = () => setNum(num - 1);

  return (
    <>
      <Text style={estilo.fontG}>Contador</Text>
      <ContadorDisplay num={num} />
      <ContadorBotoes inc={inc} dec={dec} />
    </>
  );
};
