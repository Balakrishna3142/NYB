import React from "react";

const MemoChild = React.memo(function MemoChild({ name }) {
  console.log("MemoChild Rendered");

  return (
    <div
      style={{
        border: "2px solid green",
        padding: "15px",
        margin: "10px"
      }}
    >
      <h2>Memo Child</h2>
      <p>Name: {name}</p>
    </div>
  );
});

export default MemoChild;