
import { useState, useMemo } from "react";

function App() {
  const [number, setNumber] = useState(5);
  const [dark, setDark] = useState(false);

  const total = useMemo(() => {
    console.log("Calculating sum...");

    let sum = 0;

    for (let i = 1; i <= number; i++) {
      sum += i;
    }

    return sum;
  }, [number]);

  const style = {
    backgroundColor: dark ? "#222" : "#f0f0f0",
    color: dark ? "white" : "black",
    padding: "20px",
    marginTop: "20px",
    borderRadius: "8px"
  };

  return (
    <div style={style}>
      <h1>useMemo Example</h1>

      <h2>Number: {number}</h2>
      <h2>Sum: {total}</h2>

      <button onClick={() => setNumber(n => n + 1)}>
        Increase Number
      </button>

      <button
        onClick={() => setDark(d => !d)}
        style={{ marginLeft: "10px" }}
      >
        Change Theme
      </button>
    </div>
  );
}

export default App;
