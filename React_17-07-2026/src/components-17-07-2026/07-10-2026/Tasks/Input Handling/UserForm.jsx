import { useState } from "react";

function UserForm() {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <h2>Input Handling Example</h2>

      <input
        type="text"
        value={name}
        onChange={handleChange}
        placeholder="Enter your name"
      />

      <p>Hello, {name}</p>
    </div>
  );
}

export default UserForm;