import React from "react";

function Card({ title, text }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "8px"
      }}
    >
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

export default Card;