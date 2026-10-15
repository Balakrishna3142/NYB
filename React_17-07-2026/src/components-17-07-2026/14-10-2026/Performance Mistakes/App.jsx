
import { useState, useMemo, memo } from "react";

// Child component optimized with React.memo
const Child = memo(function Child({ name }) {
  console.log("Child rendered");

  return <h3>Hello, {name}!</h3>;
});

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ravi");
  const [number, setNumber] = useState(100);

  // Optimized calculation
  const result = useMemo(() => {
    console.log("Calculating...");
    let sum = 0;

    for (let i = 1; i <= number; i++) {
      sum += i;
    }

    return sum;
  }, [number]);

  const students = ["Ravi", "Priya", "Rahul"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>React Performance Example</h1>

      {/* Mistake 1: Parent state changes can
          cause unnecessary child renders */}
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(c => c + 1)}>
        Increase Count
      </button>

      <Child name={name} />

      <button
        onClick={() =>
          setName(n => n === "Ravi" ? "Priya" : "Ravi")
        }
      >
        Change Name
      </button>

      {/* Mistake 2: Expensive calculation */}
      <h2>Sum: {result}</h2>

      <button onClick={() => setNumber(n => n + 100)}>
        Increase Number
      </button>

      {/* Mistake 3: Lists need stable keys */}
      <h2>Students</h2>

      <ul>
        {students.map(student => (
          <li key={student}>{student}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
