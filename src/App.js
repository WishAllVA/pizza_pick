import React, { useState } from 'react';
import './App.css';
import Home from './Home'

function App() {
  const [userName, setUserName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');

  return (
    <Home />
  );
}

export default App;
