import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput} from 'react-native';

import estilo from '../estilo';

export default class Mega extends Component {
  state = {
    qtdeNumeros: this.props.qtdeNumeros,
    numeros: [],
  };

  alterarQtdeNumeros = qtde => {
    this.setState({qtdeNumeros: +qtde});
  };

  gerarNumeroNaoContido = nums => {
    const novoNumero = parseInt(Math.random() * 60, 10) + 1;
    return nums.includes(novoNumero)
      ? this.gerarNumeroNaoContido(nums)
      : novoNumero;
  };

  gerarNumeros = () => {
    const numeros = Array(this.state.qtdeNumeros)
      .fill()
      .reduce(n => [...n, this.gerarNumeroNaoContido(n)], [])
      .sort((a, b) => a - b);

    this.setState({numeros});
  };

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
          value={this.state.qtdeNumeros}
          onChangeText={this.alterarQtdeNumeros}
        />
        <Button title="Gerar Números" onPress={this.gerarNumeros} />
        <Text style={estilo.fontM}>{this.state.numeros.join(',')}</Text>
      </>
    );
  }
}

const style = StyleSheet.create({
  Input: {
    marginTop: 20,
    borderBottomWidth: 1,
  },
});
