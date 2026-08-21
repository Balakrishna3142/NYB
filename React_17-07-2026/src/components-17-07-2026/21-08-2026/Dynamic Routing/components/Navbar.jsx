import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>{" "}
      <Link to="/user/101">User 101</Link>{" "}
      <Link to="/user/102">User 102</Link>
    </nav>
  );
}

export default Navbar;