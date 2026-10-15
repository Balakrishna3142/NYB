
import { useState } from "react";
import Counter from "./Counter.jsx";
import Child from "./Child.jsx";

export default function App() {
  const [showMessage, setShowMessage] = useState(true);

  return (
    <main>
      <h1>React Rendering Demo</h1>

      <Counter />

      <button
        onClick={() => setShowMessage(value => !value)}
      >
        Toggle Message
      </button>

      {showMessage && (
        <Child message="Hello from Child!" />
      )}
    </main>
  );
}
