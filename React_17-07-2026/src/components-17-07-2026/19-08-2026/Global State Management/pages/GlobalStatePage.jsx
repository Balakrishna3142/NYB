import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";

function GlobalStatePage() {
  const count = useSelector(
    (state) => state.counter.count
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Global State Management</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default GlobalStatePage;