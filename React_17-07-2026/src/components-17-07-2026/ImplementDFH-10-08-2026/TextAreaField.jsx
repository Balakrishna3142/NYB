import React, { useState } from "react";

const TextAreaField = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(message);
  };

  return (
    <div>
      <h2>Text Area</h2>

      <form onSubmit={handleSubmit}>
        <label>Message:</label>

        <br />

        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows="5"
          cols="40"
        />

        <br />

        <button type="submit">Submit</button>
      </form>

      <p>Message: {message}</p>
    </div>
  );
};

export default TextAreaField;