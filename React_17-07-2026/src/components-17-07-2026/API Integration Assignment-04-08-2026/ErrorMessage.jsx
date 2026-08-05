import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        color: "red",
        padding: "10px",
        marginBottom: "20px",
      }}
    >
      {message}
    </div>
  );
};

export default ErrorMessage;