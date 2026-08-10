import React, { useEffect, useState } from "react";

function CleanupExample() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer Started");

    const timer = setInterval(() => {
      console.log("Timer running...");
    }, 1000);

    return () => {
      console.log("Timer Cleaned Up");

      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h2>4. Cleanup Function</h2>

      <h3>Count: {count}</h3>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default CleanupExample;