import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import UsuarioLogado from './components/UsuarioLogado';

// import Familia from './components/relacao/Familia';
// import Membros from './components/relacao/Membros';
// import Diferenciar from './components/Diferenciar';
// import ContadorV2 from './components/contador/ContadorV2';
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
      <UsuarioLogado
        usuario={{nome: 'Adriano', email: 'adriano@rosset.com.br'}}
      />
      <UsuarioLogado usuario={{nome: 'Adriano'}} />
      <UsuarioLogado usuario={{email: 'adriano@rosset.com.br'}} />
      <UsuarioLogado usuario={{}} />
      <UsuarioLogado usuario={null} />
      {/*
      <Familia>
        <Membros nome="Adriano" sobreNome="Heissig" />
        <Membros nome="Ana" sobreNome="Heissig" />
      </Familia>
      <Familia>
        <Membros nome="André" sobreNome="Silva" />
        <Membros nome="Claudia" sobreNome="Silva" />
      </Familia>
      <Diferenciar />
      <ContadorV2 />
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
