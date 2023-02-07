import React from 'react';
import {Button} from 'react-native';

export default ({min = 0, max = 100, funcao}) => {
  function gerarNumero() {
    const fator = max - min + min;
    return Math.ceil(Math.random() * fator + min);
  }
  return (
    <Button
      title="Executar"
      onPress={function () {
        const num = gerarNumero();
        const texto = 'O valor é: ';
        funcao(num, texto);
      }}
    />
  );
};
