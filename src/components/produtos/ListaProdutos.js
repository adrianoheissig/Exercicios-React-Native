import React from 'react';

import {Text} from 'react-native';

import estilo from '../estilo';
import produtos from './produtos';

export default props => {
  function obterLista() {
    return produtos.map(p => {
      return (
        <Text key={p.id} style={estilo.fontM}>
          O Produto {p.nome} custa: R$ {p.preco}
        </Text>
      );
    });
  }

  return (
    <>
      <Text style={estilo.fontG}> Lista de Produtos</Text>
      {obterLista()}
    </>
  );
};
