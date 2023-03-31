import React, { useState } from 'react';
import Toppings from './Toppings';

const ToppingsSelector = ({ onSelect }) => {
  const [selectedToppings, setSelectedToppings] = useState([]);

  const handleSelect = (topping) => {
    if (selectedToppings.includes(topping)) {
      setSelectedToppings(selectedToppings.filter((item) => item !== topping));
    } else {
      setSelectedToppings([...selectedToppings, topping]);
    }
  };

  const handleSubmit = () => {
    onSelect(selectedToppings);
  };

  return (
    <div className="toppings-selector">
      <h2>Select your toppings:</h2>
      <Toppings selectedToppings={selectedToppings} onSelect={handleSelect} />
      <button onClick={handleSubmit}>Add to pizza</button>
    </div>
  );
};

export default ToppingsSelector;
