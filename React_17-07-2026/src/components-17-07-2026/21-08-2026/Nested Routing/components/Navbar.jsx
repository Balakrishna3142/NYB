import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/dashboard">Dashboard</Link>{" "}
      <Link to="/dashboard/profile">Profile</Link>{" "}
      <Link to="/dashboard/settings">Settings</Link>
    </nav>
  );
}

export default Navbar;