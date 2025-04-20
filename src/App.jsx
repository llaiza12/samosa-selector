import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0); // keep track of number of total clicks
  const [multiplier, setMultiplier] = useState(1); // keep track of current number of samosas per click
  const updateCount = () => setCount(count + multiplier); // sets value of the state var count to its current value + multiplier

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
        <button>10 samosas</button>
      </div>
      <div className="upgrade">
        <h3>Party Pack 🎉</h3>
        <p>5x per click</p>
        <button>	100 samosas</button>
      </div>
      <div className="upgrade">
        <h3>Full Feast 👩🏽‍🍳</h3>
        <p>10x per click</p>
        <button>1000 samosas</button>
      </div>
      </div>
    </div>
  )
}

export default App