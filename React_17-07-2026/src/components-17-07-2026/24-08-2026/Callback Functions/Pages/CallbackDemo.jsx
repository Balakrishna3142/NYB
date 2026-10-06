import { useState } from "react";
import CallbackExample from "../components/CallbackExample";

function CallbackDemo() {
  const [message, setMessage] = useState("No message yet");

  const handleMessage = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Callback Function Demo</h1>

      <CallbackExample onMessage={handleMessage} />

      <h3>Message from Child:</h3>
      <p>{message}</p>
    </div>
  );
}

export default CallbackDemo;