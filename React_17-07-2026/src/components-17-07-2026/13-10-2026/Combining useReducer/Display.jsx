
import { useCounter } from "./CounterContext";

export default function Display() {
  const { state } = useCounter();

  return (
    <div>
      <h3>Current Count: {state.count}</h3>
    </div>
  );
}
