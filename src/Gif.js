import React from "react";

function PizzaGif() {
  return (
    <div>
        <div style={{ paddingLeft: '600px', margin: '50px 0 120px 0', fontWeight: '600', fontSize: '24px' }}>Your Pizza is ready</div>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <img style={{ width: '400px', marginBottom: '600px' }} src="https://media.giphy.com/media/JM6EhsSVrE88w/giphy.gif" alt="Pizza creating GIF" />
        </div>
    </div>
  );
}

export default PizzaGif;
