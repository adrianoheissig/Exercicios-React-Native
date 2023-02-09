import React, {useState, Fragment} from 'react';

import {Text, TextInput} from 'react-native';

import estilo from './estilo';

export default () => {
  const [nome, setNome] = useState('Teste');
  return (
    <Fragment>
      <Text style={estilo.fontM}>{nome}</Text>

      <TextInput
        placeholder="Digite seu Nome"
        value={nome}
        onChangeText={novoNome => setNome(novoNome)}
      />
    </Fragment>
  );
};
