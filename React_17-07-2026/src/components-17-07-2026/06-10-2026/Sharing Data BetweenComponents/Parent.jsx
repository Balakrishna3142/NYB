import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

function Parent() {
  const [message, setMessage] = useState("");

  return (
    <div>
      <h1>Parent Component</h1>

      <ChildOne setMessage={setMessage} />

      <ChildTwo message={message} />
    </div>
  );
}

export default Parent;