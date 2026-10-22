
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage("Welcome, " + name + "!");
    console.log(event.type);
  }

  return (
    <div>
      <h1>React State and Events</h1>

      <h2>Counter: {count}</h2>

      <button
        onClick={(event) => {
          setCount((prev) => prev + 1);
          console.log(event.type);
        }}
      >
        Increase
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button>

      <hr />

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
            console.log(event.type);
          }}
          placeholder="Enter your name"
          required
        />

        <button type="submit">Submit</button>
      </form>

      <h2>{message}</h2>
    </div>
  );
}

export default App;
