
import { useReducer } from "react";
import cartReducer, {
  initialState,
} from "./cartReducer";

export default function Cart() {
  const [cart, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  function addItem() {
    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: Date.now(),
        name: "Laptop",
        price: 50000,
      },
    });
  }

  function removeItem(id) {
    dispatch({
      type: "REMOVE_ITEM",
      payload: id,
    });
  }

  function clearCart() {
    dispatch({ type: "CLEAR_CART" });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price,
    0
  );

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button onClick={addItem}>Add Laptop</button>
      <button onClick={clearCart}>Clear Cart</button>

      {cart.map((item) => (
        <p key={item.id}>
          {item.name} - ₹{item.price}{" "}
          <button onClick={() => removeItem(item.id)}>
            Remove
          </button>
        </p>
      ))}

      {cart.length === 0 && <p>Cart is empty</p>}

      <h3>Total: ₹{total}</h3>
      <h3>Items: {cart.length}</h3>
    </div>
  );
}
