import { useState } from 'react';
import './App.css';
import Pizza from './images/pizza-ver.png'

const toppingsList = [
  {
    id: 1,
    name: 'Mushrooms',
    image: 'https://img.icons8.com/cotton/64/000000/mushroom.png',
  },
  {
    id: 2,
    name: 'Pepperoni',
    image: 'https://img.icons8.com/cotton/64/000000/salami.png',
  },
  {
    id: 3,
    name: 'Bread',
    image: 'https://img.icons8.com/cotton/64/000000/bread.png',
  },
  {
    id: 4,
    name: 'Sausage',
    image: 'https://img.icons8.com/cotton/64/000000/sausage.png',
  },
  {
    id: 5,
    name: 'Onions',
    image: 'https://img.icons8.com/cotton/64/000000/onion.png',
  },
  {
    id: 6,
    name: 'Tomato',
    image: 'https://img.icons8.com/cotton/64/000000/tomato.png',
  },
  {
    id: 7,
    name: 'Pizza',
    image: Pizza,
  },
];

function App() {
  const [selectedToppings, setSelectedToppings] = useState([7]);

  const toggleTopping = (toppingId) => {
    if (toppingId == 7) return
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
    }
  };

  const pizzaToppings = toppingsList.filter((topping) =>
    selectedToppings.includes(topping.id)
  );

  return (
    <div className="app">
      <div className="pizza">
        {pizzaToppings.map((topping) => (
          <img
            key={topping.id}
            src={topping.image}
            alt={topping.name}
            className="topping-image"
            style={{ zIndex: topping.id == 7 ? 1: 2, width: topping.id == 7 ? '400px': null, top: topping.id == 7 ? '-2%' : null }}
          />
        ))}
      </div>
      <div className="toppings-selector">
        <h2>Select Toppings:</h2>
        <div className="toppings">
          {toppingsList.map((topping) => (
            <div
              key={topping.id}
              className={`topping ${selectedToppings.includes(topping.id) ? 'selected' : ''}`}
              onClick={() => toggleTopping(topping.id)}
            >
              <img
                src={topping.image}
                alt={topping.name}
                className="topping-image"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
