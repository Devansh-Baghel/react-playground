import { useState } from "react";
import "./App.css";

function App() {
  const [count, changeCount] = useState(0);
  
  function add() {
    changeCount(prevcount => prevcount + 1);
  }
  
  function sub() {
    changeCount(prevcount => prevcount - 1);
  }

  return (
    <div className="button-container">
      <button type="button" onClick={sub}>-</button>
      <span>{count}</span>
      <button type="button" onClick={add}>+</button>
    </div>
  );
}

export default App;
