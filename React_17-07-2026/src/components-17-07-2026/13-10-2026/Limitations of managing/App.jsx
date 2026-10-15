
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [message, setMessage] = useState("");

  const addItem = () => {
    const item = {
      id: Date.now(),
      name: "Laptop",
      price: 50000,
    };

    setItems((prevItems) => [...prevItems, item]);
    setTotal((prevTotal) => prevTotal + item.price);
    setMessage("Laptop added successfully!");
  };

  const removeItem = (id, price) => {
    setItems((prevItems) =>
      prevItems.filter((item) => item.id !== id)
    );

    setTotal((prevTotal) => prevTotal - price);
    setMessage("Item removed successfully!");
  };

  const clearCart = () => {
    setItems([]);
    setTotal(0);
    setMessage("Cart cleared!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shopping Cart</h1>

      <button onClick={addItem}>Add Laptop</button>
      <button onClick={clearCart}>Clear Cart</button>

      <p>{message}</p>

      <h2>Cart Items</h2>

      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        items.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <span>
              {item.name} - ₹{item.price}
            </span>

            <button
              onClick={() => removeItem(item.id, item.price)}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr />

      <h3>Total Price: ₹{total}</h3>
      <h3>Number of Items: {items.length}</h3>
    </div>
  );
}

export default App;
