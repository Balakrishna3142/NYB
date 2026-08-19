import React, { useState, useCallback, memo } from "react";

// Child Component
const Child = memo(function Child({ handleClick }) {
  console.log("Child component rendered");

  return (
    <div>
      <h2>Child Component</h2>

      <button onClick={handleClick}>
        Click Child Button
      </button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  // Without useCallback
  const normalFunction = () => {
    console.log("Normal function called");
  };

  // With useCallback
  const memoizedFunction = useCallback(() => {
    console.log("Memoized function called");
  }, []);

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1>useCallback() Example</h1>

      <h2>1. Counter</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <hr />

      <h2>2. Change Name</h2>

      <p>Name: {name}</p>

      <button onClick={() => setName("Kiran")}>
        Change Name
      </button>

      <hr />

      <h2>3. Normal Function</h2>

      <button onClick={normalFunction}>
        Call Normal Function
      </button>

      <h2>4. useCallback Function</h2>

      <button onClick={memoizedFunction}>
        Call Memoized Function
      </button>

      <hr />

      <h2>5. Passing Function as Props</h2>

      <Child handleClick={memoizedFunction} />
    </div>
  );
}

export default App;