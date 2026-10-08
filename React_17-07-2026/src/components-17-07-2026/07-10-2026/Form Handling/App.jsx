import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    alert("Name: " + name + "\nEmail: " + email);
  };

  return (
    <div>
      <h1>Form Handling Example</h1>

      <form onSubmit={handleSubmit}>

        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;