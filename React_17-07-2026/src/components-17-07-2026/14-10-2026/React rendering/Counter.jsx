
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  console.log("Counter rendered");

  return (
    <section>
      <h2>Counter Example</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(c => c + 1)}>
        Increase
      </button>
    </section>
  );
}
