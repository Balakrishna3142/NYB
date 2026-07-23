import React,   { useState } from "react";

function StateCounter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </>
  );
}

export default StateCounter;