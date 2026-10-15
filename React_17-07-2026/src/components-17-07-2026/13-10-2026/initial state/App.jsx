
import React, { useReducer } from "react";
import {
  counterReducer,
  initialState,
} from "./reducer";

function App() {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Initial State and State Transitions</h1>

      <h2>Count: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
