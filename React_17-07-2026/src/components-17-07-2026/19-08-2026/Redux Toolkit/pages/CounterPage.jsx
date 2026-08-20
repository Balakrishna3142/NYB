import { useDispatch, useSelector } from "react-redux";

import {
  increment,
  decrement,
  reset,
} from "../features/counter/counterSlice";

function CounterPage() {
  const count = useSelector(
    (state) => state.counter.value
  );

  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Toolkit Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        +
      </button>

      <button onClick={() => dispatch(decrement())}>
        -
      </button>

      <button onClick={() => dispatch(reset())}>
        Reset
      </button>
    </div>
  );
}

export default CounterPage;