import { useState } from "react";
import Child from "./Child";

function App() {
  const [message, setMessage] = useState("");

  // Callback function
  const getDataFromChild = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>

      <h2>Message from Child: {message}</h2>

      <Child sendData={getDataFromChild} />
    </div>
  );
}

export default App;