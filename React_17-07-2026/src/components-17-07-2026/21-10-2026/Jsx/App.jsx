
import { useState } from "react";

function App() {
  const name = "Rahul";
  const fruits = ["Apple", "Banana", "Mango"];

  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Welcome to React</h1>

      <h2>Hello, {name}!</h2>

      <p>This is a JSX example.</p>

      <h3>My Fruits</h3>
      <ul>
        {fruits.map((fruit) => (
          <li key={fruit}>{fruit}</li>
        ))}
      </ul>

      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>
        Click Me
      </button>
    </div>
  );
}

export default App;
