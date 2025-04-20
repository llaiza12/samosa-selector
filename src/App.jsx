import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // keep track of number of total clicks
  const [multiplier, setMultiplier] = useState(1); // keep track of current number of samosas per click
  const updateCount = () => setCount(count + multiplier); // sets value of the state var count to its current value + multiplier
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setMultiplier(multiplier * 2);
      setCount(count - 10);
    }
  }
  const buyPartyPack = () => {
    if (count >= 100) {
      setMultiplier(multiplier * 5);
      setCount(count - 100);
    }
  }
  const buyFullFeast = () => {
    if (count >= 1000) {
      setMultiplier(multiplier * 10);
      setCount(count - 1000);
    }
  }

  // describes the structure of the UI
  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
        <img className="samosa" src="https://png.pngtree.com/png-vector/20240616/ourmid/pngtree-samosa-recipe-delicious-indian-appetizer-png-image_12776631.png" onClick={updateCount} />
      </div>
      <div className="container">
      <div className="upgrade">
        <h3>Double Stuffed 👯‍♀️</h3>
        <p>2x per click</p>
        <button onClick={buyDoubleStuffed}>10 samosas</button>
      </div>
      <div className="upgrade">
        <h3>Party Pack 🎉</h3>
        <p>5x per click</p>
        <button onClick={buyPartyPack}>	100 samosas</button>
      </div>
      <div className="upgrade">
        <h3>Full Feast 👩🏽‍🍳</h3>
        <p>10x per click</p>
        <button onClick={buyFullFeast}>1000 samosas</button>
      </div>
      </div>
    </div>
  )
}

export default App