import { useState } from "react";
import Child from "./Child"

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <Child name="balu" />
    </div>
  );
}

export default App;