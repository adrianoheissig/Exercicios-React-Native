import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

import estilo from '../estilo';
import MegaNumero from './MegaNumero';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumeros = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novoNumero = parseInt(Math.random() * 25, 10) + 1;
    return nums.includes(novoNumero)
      ? this.gerarNumeroNaoContido(nums)
      : novoNumero;
  };

  // gerarNumeros = () => {
  //   const numeros = Array(this.state.qtdeNumeros)
  //     .fill()
  //     .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
  //     .sort((a, b) => a - b);

  //   this.setState({numeros});
  // };

  gerarNumeros = () => {
    const qtdeNumeros = this.state.qtdeNumeros;
    const numeros = [];
    for (i = 0; i < qtdeNumeros; i++) {
      const n = this.gerarNumeroNaoContido(numeros);
      numeros.push(n)
    }
    numeros.sort((a,b) => a - b);
    this.setState({numeros})
  }

   apresentarNumero = () => {
    return this.state.numeros.map(num => {
      return (
        <MegaNumero key={num} num={num} />
      )
    })
  }

  render() {
    return (
      <>
        <Text style={estilo.fontG}>
          Gerador Mega-Sena: {this.state.qtdeNumeros}{' '}
        </Text>
        <TextInput
          keyboardType="numeric"
          style={style.Input}
          placeholder="Digite a qtde de números"
          value={`${this.state.qtdeNumeros}`}
          onChangeText={this.alterarQtdeNumeros}
        />
        <Button title="Gerar Números" onPress={this.gerarNumeros} />
        <View style={style.ContainerNum}> 
           {this.apresentarNumero()}
        </View>
      </>
    );
  }
}

const style = StyleSheet.create({
  Input: {
    marginTop: 20,
    borderBottomWidth: 1,
  },
  ContainerNum: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
    justifyContent: 'space-evenly'
  }
});
