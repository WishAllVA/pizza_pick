import { useState } from 'react';
import './Main.css';
// import Pizza from './images/pizza-ver.png'
import Pizza from './images/test1.png'
import TomatoPizza from './images/tomato-pizza.png'
import PizzaGif from './Gif';

const mushroomPizzaUrl = 'https://cdn.shopify.com/s/files/1/0620/4194/8332/products/product-beauty-the-mushroom.png?v=1656423857'
const mushroomAndTomatoPizzaUrl = 'https://p7.hiclipart.com/preview/915/614/493/pizza-take-out-submarine-sandwich-fast-food-pizza.jpg'
const pepperoniPizzaUrl = 'https://media.istockphoto.com/id/1284103355/vector/pepperoni-pizza-icon-on-transparent-background.jpg?s=170667a&w=0&k=20&c=XgOQmR5g5Vp2GLUWFRXJoA6DOrv1Kz2SjRZZTeCNPPs='
const onionPizzaUrl = 'http://pizzaparadise.in/wp-content/uploads/2019/10/paneer-onion-pizza-mania.png'
const pepperoniOnionPizzaUrl = 'https://www.kindpng.com/picc/m/110-1103120_salami-pepperoni-mushrooms-onion-bell-peppers-pepperoni-pizza.png'
const tomatoOnionPizzaUrl = 'https://png.pngtree.com/png-clipart/20190906/original/pngtree-gourmet-onion-pizza-png-image_4556242.jpg'

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
    id: 8,
    name: 'Onions',
    image: 'https://img.icons8.com/cotton/64/000000/onion.png',
  },
  {
    id: 16,
    name: 'Tomato',
    image: 'https://img.icons8.com/cotton/64/000000/tomato.png',
  }
];

function Main({ name, restaurant }) {
  const [selectedToppings, setSelectedToppings] = useState([0]);
  const [currentPizza, setCurrentPizza] = useState(Pizza);
  const [showGif, setShowGif] = useState(false);

    const handleGif = () => {
        setShowGif(true)
    }

  const toggleTopping = (toppingId) => {
    let newSelectedToppings;
    if (selectedToppings.includes(toppingId)) {
      setSelectedToppings(selectedToppings.filter((id) => id !== toppingId));
      newSelectedToppings = selectedToppings.filter((id) => id !== toppingId)
    } else {
      setSelectedToppings([...selectedToppings, toppingId]);
      newSelectedToppings = [...selectedToppings, toppingId]
    }
    let count = 0
    newSelectedToppings.forEach(topping => count += topping)
    
    if (count == 16) {
      setCurrentPizza(TomatoPizza)
    } else if (count == 0) {
      setCurrentPizza(Pizza)
    } else if (count == 1) {
      setCurrentPizza(mushroomPizzaUrl)
    } else if (count == 17) {
      setCurrentPizza(mushroomAndTomatoPizzaUrl)
    } else if (count == 2) {
      setCurrentPizza(pepperoniPizzaUrl)
    } else if (count == 8) {
      setCurrentPizza(onionPizzaUrl)
    } else if (count == 10) {
      setCurrentPizza(pepperoniOnionPizzaUrl)
    } else if (count == 24) {
      setCurrentPizza(tomatoOnionPizzaUrl)
    } 

  };

  const pizzaToppings = toppingsList.filter((topping) =>
    selectedToppings.includes(topping.id)
  );

  return (
    showGif ? <PizzaGif /> :
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ fontSize: '24px', margin: '60px 0 0 60px' }}>Hi {name}, welcome to {restaurant}</div>
        <div className="app">
        <div className="pizza">
            <img
                src={currentPizza}
                alt={"Pizza"}
                className="topping-image"
                style={{ zIndex: 1, width: '400px', top: '-2%' }}
            />
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
        <div>
            <button style={{ marginTop: '100px' }} onClick={handleGif}>Submit</button>
        </div>
    </div>
  );
}

export default Main;
