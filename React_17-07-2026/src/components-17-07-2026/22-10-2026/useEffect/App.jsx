
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [seconds, setSeconds] = useState(0);

  // 1. Initial Rendering (runs on mount)
  useEffect(() => {
    console.log("Component Mounted");
  }, []);

  // 2. State-Based Effect
  // Runs when count changes
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log("Count changed:", count);
  }, [count]);

  // 3. Cleanup Function and Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    console.log("Timer Started");

    return () => {
      clearInterval(timer);
      console.log("Timer Cleaned Up");
    };
  }, []);

  // 4. Effect without dependency array
  useEffect(() => {
    console.log("Component rendered");
  });

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React useEffect Demo</h1>

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      <h2>Timer: {seconds} seconds</h2>
    </div>
  );
}

export default App;
