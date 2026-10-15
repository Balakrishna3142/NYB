
import { useGlobal } from "./GlobalContext";

export default function Profile() {
  const { state } = useGlobal();

  return (
    <div>
      <h3>User Profile</h3>
      <p>Name: {state.user}</p>
      <p>Current Theme: {state.theme}</p>
    </div>
  );
}
