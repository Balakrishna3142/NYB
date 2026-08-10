import React from "react";

function LogicalAndExample({ hasMessage }) {
  return (
    <div>
      {hasMessage && <p>You have a new message!</p>}
    </div>
  );
}

export default LogicalAndExample;