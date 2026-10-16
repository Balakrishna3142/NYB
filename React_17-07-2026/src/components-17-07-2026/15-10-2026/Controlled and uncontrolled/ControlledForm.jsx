
import { useState } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert("Your name is: " + name);
  }

  return (
    <div>
      <h2>Controlled Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <p>Your name: {name}</p>
    </div>
  );
}
