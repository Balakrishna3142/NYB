import { useState } from "react";

function StrictModePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React Strict Mode</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default StrictModePage;