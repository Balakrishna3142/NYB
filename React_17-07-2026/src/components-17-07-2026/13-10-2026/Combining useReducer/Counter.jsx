
import { useCounter } from "../context/CounterContext";

export default function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <div>
      <h2>Counter: {state.count}</h2>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment (+)
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
      >
        Decrement (-)
      </button>

      <button
        onClick={() => dispatch({ type: "RESET" })}
      >
        Reset
      </button>
    </div>
  );
}
