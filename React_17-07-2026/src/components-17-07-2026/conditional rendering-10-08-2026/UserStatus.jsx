import Login from "./Login";
import Dashboard from "./Dashboard";

function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <Dashboard />;
  }

  return <Login />;
}

export default UserStatus;