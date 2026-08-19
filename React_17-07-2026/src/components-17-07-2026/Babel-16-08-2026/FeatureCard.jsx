import React from "react";

function FeatureCard({ title, description }) {
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

      <p>{description}</p>
    </div>
  );
}

export default FeatureCard;