import { useState } from "react";

function UserInput() {

  const [name, setName] = useState("");

  return (
    <div>

      <h2>User Input Example</h2>

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Welcome {name}</h3>

    </div>
  );
}

export default UserInput;