
import { useState } from "react";

function RegistrationForm() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (!name.trim()) {
      setMessage("Please enter your name");
      return;
    }

    setMessage(`Welcome, ${name}!`);
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>

        <input
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p role="status">{message}</p>}
    </div>
  );
}

export default RegistrationForm;
