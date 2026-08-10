import React, { useEffect, useState } from "react";

function WithDependency() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");

  useEffect(() => {
    console.log("Count changed:", count);
  }, [count]);

  return (
    <div>
      <h2>3. useEffect With Dependency</h2>

      <h3>Count: {count}</h3>
      <h3>Name: {name}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={() => setName("JavaScript")}>
        Change Name
      </button>
    </div>
  );
}

export default WithDependency;