import { useState } from "react";

function EventHandling() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // Click Event
  const handleClick = () => {
    setMessage("Button was clicked!");
  };

  // Change Event
  const handleChange = (event) => {
    setName(event.target.value);
  };

  // Submit Event
  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello ${name}`);
  };

  // Keyboard Event
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setMessage(`You pressed Enter. Hello ${name}`);
    }
  };

  return (
    <div>
      <h1>React Event Handling</h1>

      {/* Change Event */}
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <br />
      <br />

      {/* Click Event */}
      <button onClick={handleClick}>
        Click Me
      </button>

      <br />
      <br />

      {/* Submit Event */}
      <form onSubmit={handleSubmit}>
        <button type="submit">
          Submit
        </button>
      </form>

      <h2>{message}</h2>
    </div>
  );
}

export default EventHandling;