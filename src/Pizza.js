import React from 'react';
import Toppings from './Toppings';

const Pizza = ({ selectedToppings }) => {
  return (
    <div className="pizza">
      <div className="base-layer"></div>
      <Toppings selectedToppings={selectedToppings} />
    </div>
  );
};

export default Pizza;
