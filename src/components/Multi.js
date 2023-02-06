import React from 'react';
import {Text} from 'react-native';
import estilo from './estilo';

export default function Comp() {
  return <Text style={estilo.fontM}>Componente Padrão</Text>;
}

export function Comp1() {
  return <Text style={estilo.fontP}>Componente #1</Text>;
}

function Comp2() {
  return <Text style={estilo.fontPP}>Componente #2</Text>;
}

export {Comp2};
