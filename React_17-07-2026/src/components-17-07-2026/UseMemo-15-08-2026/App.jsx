import React, { useState, useMemo } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(10);

  // Expensive calculation
  const expensiveCalculation = (num) => {
    console.log("Expensive calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i % num;
    }

    return result;
  };

  // Without useMemo
  const normalResult = expensiveCalculation(number);

  // With useMemo
  const memoizedResult = useMemo(() => {
    console.log("useMemo calculation running...");

    let result = 0;

    for (let i = 0; i < 100000000; i++) {
      result += i % number;
    }

    return result;
  }, [number]);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>useMemo() Example</h1>

      <h2>1. Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <h2>2. Expensive Calculation</h2>

      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(Number(e.target.value))}
      />

      <h3>Without useMemo:</h3>
      <p>{normalResult}</p>

      <h3>With useMemo:</h3>
      <p>{memoizedResult}</p>

      <hr />

      <h2>How useMemo Works</h2>

      <p>
        When you click "Increase Count", the component renders again.
      </p>

      <p>
        The calculation without useMemo runs again on every render.
      </p>

      <p>
        The calculation with useMemo runs only when <b>number</b> changes.
      </p>
    </div>
  );
}

export default App;