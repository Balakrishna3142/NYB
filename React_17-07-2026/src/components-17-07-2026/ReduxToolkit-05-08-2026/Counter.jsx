import { useSelector } from "react-redux";
import Buttons from "./Buttons";

function Counter() {
  const count = useSelector((state) => state.Counter.value);

  return (
    <div>
      <h2>Counter Value : {count}</h2>

      <Buttons />
    </div>
  );
}

export default Counter;