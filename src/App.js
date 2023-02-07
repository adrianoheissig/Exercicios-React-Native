import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import ContadorV2 from './components/contador/ContadorV2';

// import Pai from './components/indireta/Pai';
// import Pai from './components/direta/Pai';
// import Contador from './components/Contador';
// import Botao from './components/Botao';
// import Titulo from './components/Titulo';
// import Aleatorio from './components/Aleatorio';
// import MinMax from './components/MinMax';
// import CompPadrao, {Comp1, Comp2} from './components/Multi';
// import PrimeiroComponente from './components/Primeiro';

const App = () => {
  return (
    <SafeAreaView style={style.App}>
      <ContadorV2 />
      {/*
      <Pai />
      <Contador inicial={1} />
      <Botao />
      <Titulo principal="Cadastro" secundario="Tela para Cadastro de Usuário" />
      <Aleatorio min={1} max={50} />
      <MinMax min={10} max={30} />
      <MinMax min={20} max={90} />
      <CompPadrao />
      <Comp1 />
      <Comp2 />
      <PrimeiroComponente /> */}
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  App: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
