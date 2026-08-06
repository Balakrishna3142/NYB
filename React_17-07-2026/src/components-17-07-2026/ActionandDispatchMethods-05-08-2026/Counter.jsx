import { useSelector } from "react-redux";

function Counter() {
  const count = useSelector((state) => state.count);

  return (
    <div>
      <h2>Counter Value: {count}</h2>
    </div>
  );
}

export default Counter;