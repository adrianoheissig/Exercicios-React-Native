import React from 'react';
import Filho from './Filho';

export default () => {
  const x = 10;
  const y = 100;
  return (
    <>
      <Filho a={x} b={y} />
      <Filho a={100} b={500} />
    </>
  );
};
