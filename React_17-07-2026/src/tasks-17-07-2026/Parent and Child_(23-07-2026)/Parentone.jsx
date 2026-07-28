import React, { useState } from "react";
import Childone from "./Childone"
import Childtwo from "./Childtwo"

function Parentone() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "20px",
        margin: "20px",
      }}
    >
      <h2>Parent Component</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <p>Count: {count}</p>

      <Childone name="Nyb" />

      <Childtwo count={count} />
    </div>
  );
}

export default Parent;