import React, { useState } from "react";

function EmptyState() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems(["React Course"]);
  };

  const removeItems = () => {
    setItems([]);
  };

  return (
    <div>
      <h2>Empty State Example</h2>

      <button onClick={addItem}>
        Add Item
      </button>

      <button onClick={removeItems}>
        Remove All
      </button>

      {items.length === 0 ? (
        <p>No items available.</p>
      ) : (
        <div>
          <h3>Available Items:</h3>

          {items.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default EmptyState;