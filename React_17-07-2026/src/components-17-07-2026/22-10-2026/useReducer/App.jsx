
import React, {
  createContext,
  useContext,
  useReducer,
} from "react";

//  Create Context
const CartContext = createContext();

// . Initial State
const initialState = {
  items: [
    { id: 1, name: "Laptop", price: 50000, quantity: 1 },
    { id: 2, name: "Mouse", price: 500, quantity: 2 },
  ],
};

// Reducer Function
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [
          ...state.items,
          { ...action.payload, quantity: 1 },
        ],
      };
    }

    case "INCREASE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "DECREASE":
      return {
        ...state,
        items: state.items
          .map((item) =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    case "REMOVE":
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id !== action.payload
        ),
      };

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

//  Provider + useReducer
function CartProvider({ children }) {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// . Consumer Component
function ShoppingCart() {
  const { state, dispatch } = useContext(CartContext);

  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mouse", price: 500 },
    { id: 3, name: "Keyboard", price: 1500 },
  ];

  const total = state.items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Shopping Cart</h1>

      <h2>Available Products</h2>

      {products.map((product) => (
        <p key={product.id}>
          {product.name} - ₹{product.price}{" "}
          <button
            onClick={() =>
              dispatch({
                type: "ADD_ITEM",
                payload: product,
              })
            }
          >
            Add
          </button>
        </p>
      ))}

      <hr />

      <h2>Your Cart</h2>

      {state.items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        state.items.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>
              Price: ₹{item.price} | Quantity: {item.quantity}
            </p>

            <button
              onClick={() =>
                dispatch({
                  type: "INCREASE",
                  payload: item.id,
                })
              }
            >
              +
            </button>{" "}

            <button
              onClick={() =>
                dispatch({
                  type: "DECREASE",
                  payload: item.id,
                })
              }
            >
              -
            </button>{" "}

            <button
              onClick={() =>
                dispatch({
                  type: "REMOVE",
                  payload: item.id,
                })
              }
            >
              Remove
            </button>

            <hr />
          </div>
        ))
      )}

      <h2>Total: ₹{total.toLocaleString("en-IN")}</h2>

      <button onClick={() => dispatch({ type: "CLEAR" })}>
        Clear Cart
      </button>
    </div>
  );
}

//  Main App
export default function App() {
  return (
    <CartProvider>
      <ShoppingCart />
    </CartProvider>
  );
}
