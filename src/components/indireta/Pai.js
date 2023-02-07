import React, {useState, Fragment} from 'react';
import {Text} from 'react-native';
import estilo from '../estilo';
import Filho from './Filho';

export default () => {
  const [num, setNum] = useState(0);
  const [txt, setTexto] = useState('');

  function exibirValor(numero, texto) {
    setNum(numero);
    setTexto(texto);
  }

  return (
    <Fragment>
      <Text style={estilo.fontG}>
        {txt}
        {num}
      </Text>

      <Filho min={1} max={60} funcao={exibirValor} />
    </Fragment>
  );
};
