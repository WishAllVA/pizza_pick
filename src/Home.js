import React, { useState } from 'react';
import './Home.css'
import Main from './Main';

function Home() {
  const [userName, setUserName] = useState('');
  const [restaurantName, setRestaurantName] = useState('');
  const [showMain, setShowMain] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMain(true)
    console.log(`User name: ${userName}`);
    console.log(`Restaurant name: ${restaurantName}`);
    // You could also perform some action here, like sending the data to a server
  }

  return (
    !showMain ?
        <form>
            <label>
                User name:
                <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </label>
            <br />
            <label>
                Restaurant name:
                <input type="text" value={restaurantName} onChange={(e) => setRestaurantName(e.target.value)} />
            </label>
            <br />
            <button type="submit" onClick={handleSubmit}>Submit</button>
        </form> :
        <Main name={userName} restaurant={restaurantName} />
  );
}

export default Home;
