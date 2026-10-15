
import { useState, useCallback, memo } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <button onClick={onClick}>
      Click Child Button
    </button>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  const handleClick = useCallback(() => {
    alert("Hello from Child!");
  }, []);

  console.log("Parent rendered");

  return (
    <div>
      <h1>useCallback Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <br /><br />

      <button
        onClick={() =>
          setName(n => n === "Ravi" ? "Priya" : "Ravi")
        }
      >
        Change Name: {name}
      </button>

      <br /><br />

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
