import React from "react";

import {
  useSelector,
  useDispatch
} from "react-redux";

import {
  increment,
  decrement,
  reset
} from "../pages/counterSlice";

function Counter() {

  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();


  return (
    <div>

      <h2>Redux Toolkit Counter</h2>

      <h1>{count}</h1>

      <button
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      {" "}

      <button
        onClick={() => dispatch(decrement())}
      >
        -
      </button>

      {" "}

      <button
        onClick={() => dispatch(reset())}
      >
        Reset
      </button>

    </div>
  );
}

export default Counter;