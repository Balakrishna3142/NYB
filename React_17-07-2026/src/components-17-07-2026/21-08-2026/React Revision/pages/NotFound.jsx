import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <Link to="/">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;