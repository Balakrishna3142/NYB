import React, { useState, useMemo, useCallback, memo } from "react";

// --------------------------------------------------
// Child Component
// React.memo() prevents unnecessary re-rendering
// --------------------------------------------------

const Child = memo(function Child({ onClick, value }) {
  console.log("Child Component Rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <p>Value from Parent: {value}</p>

      <button onClick={onClick}>
        Click Child Button
      </button>
    </div>
  );
});

// --------------------------------------------------
// Expensive Calculation
// --------------------------------------------------

function expensiveCalculation(number) {
  console.log("Expensive calculation running...");

  let result = 0;

  for (let i = 0; i < 100000000; i++) {
    result += i % number;
  }

  return result;
}

// --------------------------------------------------
// Main App
// --------------------------------------------------

function App() {
  const [count, setCount] = useState(0);
  const [number, setNumber] = useState(5);
  const [name, setName] = useState("Ravi");

  // ------------------------------------------------
  // WITHOUT useMemo
  // This calculation runs on every render
  // ------------------------------------------------

  const normalResult = expensiveCalculation(number);

  // ------------------------------------------------
  // WITH useMemo
  // Calculation runs only when 'number' changes
  // ------------------------------------------------

  const memoizedResult = useMemo(() => {
    console.log("useMemo calculation running...");

    return expensiveCalculation(number);
  }, [number]);

  // ------------------------------------------------
  // WITHOUT useCallback
  // New function is created on every render
  // ------------------------------------------------

  const normalFunction = () => {
    console.log("Normal function called");
  };

  // ------------------------------------------------
  // WITH useCallback
  // Same function reference is reused
  // ------------------------------------------------

  const memoizedFunction = useCallback(() => {
    console.log("Memoized function called");
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>

      <h1>React Performance Optimization</h1>

      <hr />

      {/* ------------------------------------------
          1. Normal Counter
         ------------------------------------------ */}

      <h2>1. Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      {/* ------------------------------------------
          2. Expensive Calculation
         ------------------------------------------ */}

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

      {/* ------------------------------------------
          3. Name Change
         ------------------------------------------ */}

      <h2>3. Change Name</h2>

      <p>Name: {name}</p>

      <button onClick={() => setName("Kiran")}>
        Change Name
      </button>

      <hr />

      {/* ------------------------------------------
          4. Function Comparison
         ------------------------------------------ */}

      <h2>4. Function Memoization</h2>

      <button onClick={normalFunction}>
        Normal Function
      </button>

      <button
        onClick={memoizedFunction}
        style={{ marginLeft: "10px" }}
      >
        useCallback Function
      </button>

      <hr />

      {/* ------------------------------------------
          5. Child Component
         ------------------------------------------ */}

      <h2>5. Passing Function as Props</h2>

      <Child
        onClick={memoizedFunction}
        value={count}
      />

      <hr />

      {/* ------------------------------------------
          Performance Summary
         ------------------------------------------ */}

      <h2>Performance Techniques Used</h2>

      <ul>
        <li>
          <b>useMemo()</b> → Memoizes expensive calculation
        </li>

        <li>
          <b>useCallback()</b> → Memoizes function
        </li>

        <li>
          <b>React.memo()</b> → Prevents unnecessary child re-render
        </li>

        <li>
          <b>State Management</b> → Controls component rendering
        </li>
      </ul>

    </div>
  );
}

export default App;