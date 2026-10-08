import { useState } from "react";

function UserInteraction() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Button click
  const handleIncrease = () => {
    setCount(count + 1);
  };

  // Input change
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h1>User Interaction Example</h1>

      {/* Counter */}
      <h2>Count: {count}</h2>

      <button onClick={handleIncrease}>
        Increase
      </button>

      {/* Input */}
      <h2>Hello, {name}</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
    </div>
  );
}

export default UserInteraction;