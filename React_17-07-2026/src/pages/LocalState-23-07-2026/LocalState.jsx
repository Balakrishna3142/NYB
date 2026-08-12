import { useState } from "react";

function LocalStatePage() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1>Local State Practice</h1>
      <label>
        Your name
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
        />
      </label>
      <p>{name ? `Hello, ${name}!` : "Enter a name to see local state update."}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((currentCount) => currentCount + 1)}>
        Increase count
      </button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}

export default LocalStatePage;
