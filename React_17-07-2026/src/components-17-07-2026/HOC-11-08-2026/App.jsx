import User from "./User";
import withMessage from "./withMessage";

const EnhancedUser = withMessage(User);

function App() {
  return (
    <div>
      <EnhancedUser />
    </div>
  );
}

export default App;