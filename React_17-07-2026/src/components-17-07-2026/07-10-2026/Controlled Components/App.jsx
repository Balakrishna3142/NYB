import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Your name is: " + name);
  };

  return (
    <div>
      <h1>Controlled Component Example</h1>

      <form onSubmit={handleSubmit}>
        <label>Enter Name: </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <br /><br />

        <button type="submit">Submit</button>
      </form>

      <h3>You entered: {name}</h3>
    </div>
  );
}

export default App;