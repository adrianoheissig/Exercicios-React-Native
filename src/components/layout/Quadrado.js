import React from 'react';

import {StyleSheet, View} from 'react-native';

export default props => {
  return (
    <View style={[style.Quadrado, {backgroundColor: props.cor || '#000'}]} />
  );
};

const style = StyleSheet.create({
  Quadrado: {
    width: 20,
    height: 20,
  },
});
