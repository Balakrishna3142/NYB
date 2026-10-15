
import { useGlobal } from "./GlobalContext";

export default function Counter() {
  const { state, dispatch } = useGlobal();

  return (
    <div>
      <h3>Global Counter: {state.count}</h3>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
      >
        Increment
      </button>
    </div>
  );
}
