import React from 'react';

import {Text} from 'react-native';

import estilo from './estilo';
import _if from './if';

export default props => {
  const usuario = props.usuario || {};
  const validacao = usuario && usuario.nome && usuario.email;

  return (
    <_if teste={validacao}>
      <>
        <Text style={estilo.fontG}>Usuário Logado</Text>
        <Text style={estilo.fontG}>
          {usuario.nome} - {usuario.email}
        </Text>
      </>
    </_if>
  );
};
