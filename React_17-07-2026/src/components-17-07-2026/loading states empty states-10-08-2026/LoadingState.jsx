import React, { useState } from "react";

function LoadingState() {
  const [loading, setLoading] = useState(true);

  return (
    <div>
      <h2>Loading State Example</h2>

      <button onClick={() => setLoading(!loading)}>
        {loading ? "Stop Loading" : "Start Loading"}
      </button>

      {loading ? (
        <p>Loading... Please wait.</p>
      ) : (
        <p>Data loaded successfully!</p>
      )}
    </div>
  );
}

export default LoadingState;