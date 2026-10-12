import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Runs after every render
  useEffect(() => {
    console.log("Component rendered");
  });

  // Runs only after initial render
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  // Runs when count changes
  useEffect(() => {
    console.log("Count changed");
    document.title = `Count: ${count}`;
  }, [count]);

  // Runs when name changes
  useEffect(() => {
    console.log("Name changed");
  }, [name]);

  return (
    <div>
      <h1>useState and useEffect Example</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <br />
      <br />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;