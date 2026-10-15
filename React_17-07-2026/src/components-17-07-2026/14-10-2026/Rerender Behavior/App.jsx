
import { useState, memo } from "react";

const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h3>Hello, {name}!</h3>;
});

export default function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");

  console.log("Parent rendered");

  return (
    <div>
      <h1>React Re-render Behavior</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <br /><br />

      <button
        onClick={() =>
          setName(name === "Ravi" ? "Priya" : "Ravi")
        }
      >
        Change Name
      </button>

      <Child name={name} />
    </div>
  );
}
