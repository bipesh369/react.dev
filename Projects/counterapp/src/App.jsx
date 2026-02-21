import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const decrement = () => {
    setCount(prev => (prev > 0 ? prev - 1 : 0));
  };

  const reset = () => {
    setCount(0);
  };

  const incrByFive = () => {
    setCount(prev => prev + 5);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <h3>Doubled Value Of Count: {count * 2}</h3>

      <button onClick={increment}>+</button>
      <button onClick={decrement} disabled={count === 0}>-</button>
      <button onClick={reset}>Reset</button>
      <button onClick={incrByFive}>Add By 5</button>
    </>
  );
}

export default App;