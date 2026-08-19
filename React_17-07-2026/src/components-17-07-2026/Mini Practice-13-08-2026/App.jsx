import Counter from "./Counter";
import User from "./User";
import withTitle from "./withTitle";

const EnhancedCounter = withTitle(Counter);

function App() {
  return (
    <>
      <h1>Mini React Practice</h1>

      <EnhancedCounter />

      <hr />

      <User />
    </>
  );
}

export default App;