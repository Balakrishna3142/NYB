import { useReducer } from "react";

const initialState = {
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return {
        cart: [...state.cart, action.payload],
      };

    case "remove":
      return {
        cart: state.cart.filter(
          (item, index) => index !== action.payload
        ),
      };

    case "clear":
      return initialState;

    default:
      return state;
  }
}

function ShoppingCart() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>Shopping Cart</h2>

      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: "Laptop",
          })
        }
      >
        Add Laptop
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "add",
            payload: "Mobile",
          })
        }
      >
        Add Mobile
      </button>

      <button onClick={() => dispatch({ type: "clear" })}>
        Clear Cart
      </button>

      <h3>Items</h3>

      <ul>
        {state.cart.map((item, index) => (
          <li key={index}>
            {item}

            <button
              onClick={() =>
                dispatch({
                  type: "remove",
                  payload: index,
                })
              }
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;