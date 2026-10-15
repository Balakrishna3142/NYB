
import { useState, memo, useCallback } from "react";

const Child = memo(function Child({ onClick }) {
  console.log("Child rendered");

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onClick}>
        Child Button
      </button>
    </div>
  );
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  console.log("Parent rendered");

  const handleClick = useCallback(() => {
    alert("Child button clicked!");
  }, []);

  return (
    <div>
      <h1>Avoiding Unnecessary Re-renders</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <h2>Name: {name}</h2>

      <button
        onClick={() =>
          setName(n => n === "Ravi" ? "Priya" : "Ravi")
        }
      >
        Change Name
      </button>

      <Child onClick={handleClick} />
    </div>
  );
}

export default App;
