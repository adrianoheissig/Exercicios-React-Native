import React from 'react';

import {Text, Platform} from 'react-native';

import estilo from './estilo';

export default () => <Text style={estilo.fontG}>{Platform.OS}</Text>;
