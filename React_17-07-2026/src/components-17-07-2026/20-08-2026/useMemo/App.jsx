import { useMemo, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const square = useMemo(() => {
    console.log("Calculating square...");
    return count * count;
  }, [count]);

  return (
    <div>
      <h2>Count: {count}</h2>
      <h2>Square: {square}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default App;