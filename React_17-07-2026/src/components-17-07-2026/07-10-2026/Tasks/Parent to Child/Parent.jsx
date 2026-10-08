import { useState } from "react";
import Child from "./Child";

function Parent() {
  const [message, setMessage] = useState("");

  // Function created in Parent
  const showMessage = () => {
    setMessage("Hello from Child!");
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>{message}</h2>

      {/* Passing function to Child */}
      <Child onButtonClick={showMessage} />
    </div>
  );
}

export default Parent;