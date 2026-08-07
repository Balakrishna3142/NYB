import { useContext } from "react";
import { CounterContext } from "./CounterContext";

function Counter() {
  const { count } = useContext(CounterContext);

  return <h2>{count}</h2>;
}

export default Counter;