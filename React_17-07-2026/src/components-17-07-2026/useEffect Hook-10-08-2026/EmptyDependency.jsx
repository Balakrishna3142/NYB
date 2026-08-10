import React, { useEffect, useState } from "react";

function EmptyDependency() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("useEffect runs only once");

    // Component 
  }, []);

  return (
    <div>
      <h2>2. useEffect With Empty Dependency Array</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default EmptyDependency;