import { useReducer } from "react";

const initialState = 0;

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return state + 1;

    default:
      return state;
  }
}

function CounterReducer() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2>{count}</h2>

      <button
        onClick={() =>
          dispatch({ type: "increment" })
        }
      >
        Increment
      </button>
    </>
  );
}

export default CounterReducer;