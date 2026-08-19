import React from "react";

function ErrorMessage({ message, onRetry }) {
  return (
    <div
      style={{
        padding: "20px",
        background: "#ffe6e6",
        color: "#b00020",
        borderRadius: "8px",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h3>Something went wrong</h3>

      <p>{message}</p>

      {onRetry && (
        <button onClick={onRetry}>
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorMessage;