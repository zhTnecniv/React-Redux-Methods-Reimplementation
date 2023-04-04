import { useState } from "react";
import { CounterContext } from './CounterContext';
import CounterApp1 from "./CounterApp1";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 2);
  }

  return (
    <CounterContext.Provider value={{ counter, incrementCounter }}>
      <CounterApp1 />
    </CounterContext.Provider>
  );
}

export default App;
