import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.counter);

  return (
    <div>
      <h2>Current Count: {count}</h2>
    </div>
  );
}

export default Counter;