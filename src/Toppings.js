import React from 'react';
import { useSpring, animated } from 'react-spring';
import Capsicum from './images/capsicum.png'
import Cheese from './images/cheese.png'
import Mushroom from './images/mushroom.png'
import Olives from './images/olives.png'
import Onion from './images/onion.png'
import Pizza from './images/pizza.png'

const Toppings = ({ selectedToppings }) => {
  const toppings = [
    // { name: 'Pepperoni', image: 'pepperoni.png' },
    { name: 'Mushrooms', image: Mushroom },
    { name: 'Onions', image: Onion },
    // { name: 'Sausage', image: 'sausage.png' },
    // { name: 'Bacon', image: 'bacon.png' },
    { name: 'Extra cheese', image: Cheese },
    { name: 'Black olives', image: Olives },
    // { name: 'Green peppers', image: 'peppers.png' },
  ];

  return (
    <div className="toppings">
      {toppings.map((topping, index) => (
        <Topping
          key={index}
          name={topping.name}
          image={topping.image}
          selected={selectedToppings.includes(topping.name)}
        />
      ))}
    </div>
  );
};

const Topping = ({ name, image, selected }) => {
  const springProps = useSpring({
    opacity: selected ? 1 : 0,
    transform: selected ? 'scale(1)' : 'scale(0.5)',
  });

  return (
    <animated.div className="topping" style={springProps}>
      <img src={image} alt={name} />
    </animated.div>
  );
};

export default Toppings;
