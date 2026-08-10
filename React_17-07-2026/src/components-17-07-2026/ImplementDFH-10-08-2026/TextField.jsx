import React, { useState } from "react";

const TextField = () => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(name);
  };

  return (
    <div>
      <h2>Text Field</h2>

      <form onSubmit={handleSubmit}>
        <label>Name: </label>

        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />

        <button type="submit">Submit</button>
      </form>

      <p>Name: {name}</p>
    </div>
  );
};

export default TextField;