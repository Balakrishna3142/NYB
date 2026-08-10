import React, { useEffect, useState } from "react";

function NoDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect runs after every render");
  });

  return (
    <div>
      <h2>1. useEffect Without Dependency Array</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default NoDependency;