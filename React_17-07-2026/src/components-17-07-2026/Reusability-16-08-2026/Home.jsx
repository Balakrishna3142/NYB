import React, {
  useMemo,
  useCallback,
  useState
} from "react";

import Child from "./Child";

import useCounter
  from "./useCounter";


function Home() {

  // Custom Hook
  const {
    count,
    increment,
    decrement,
    reset
  } = useCounter(0);


  // Normal State
  const [number, setNumber] = useState(10);


  // useMemo()
  const expensiveCalculation = useMemo(() => {

    console.log("Expensive Calculation Running...");

    let result = 0;

    for (let i = 0; i < 1000000; i++) {
      result += number;
    }

    return result;

  }, [number]);


  // useCallback()
  const handleChildClick = useCallback(() => {

    alert("Child button clicked!");

  }, []);


  return (
    <div>

      <h1>React Performance Practice</h1>

      <hr />

      <h2>Custom Hook - useCounter</h2>

      <h3>Count: {count}</h3>

      <button onClick={increment}>
        +
      </button>

      {" "}

      <button onClick={decrement}>
        -
      </button>

      {" "}

      <button onClick={reset}>
        Reset
      </button>


      <hr />


      <h2>useMemo() Example</h2>

      <p>
        Number: {number}
      </p>

      <p>
        Expensive Result: {expensiveCalculation}
      </p>

      <button
        onClick={() => setNumber(number + 1)}
      >
        Change Number
      </button>


      <hr />


      <h2>React.memo() + useCallback()</h2>

      <Child
        number={number}
        onClick={handleChildClick}
      />

    </div>
  );
}

export default Home;