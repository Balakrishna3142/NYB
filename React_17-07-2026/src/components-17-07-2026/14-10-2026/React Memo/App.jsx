
import { useState, memo } from "react";

// Child component
const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h2>Hello, {name}!</h2>;
});

// Parent component
export default function App() {
  const [count, setCount] = useState(0);

  console.log("Parent rendered");

  return (
    <div>
      <h1>React.memo() Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Child name="Ravi" />
    </div>
  );
}
