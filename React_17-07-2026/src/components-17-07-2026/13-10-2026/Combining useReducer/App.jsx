
import { CounterProvider } from "./CounterContext";
import Counter from "./Counter";
import Display from "./Display";

export default function App() {
  return (
    <CounterProvider>
      <div style={{ padding: "20px" }}>
        <h1>useReducer + Context API</h1>

        <Counter />
        <hr />
        <Display />
      </div>
    </CounterProvider>
  );
}
