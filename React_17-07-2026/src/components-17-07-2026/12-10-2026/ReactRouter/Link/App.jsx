import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useParams,
  useNavigate
} from "react-router-dom";

import Home from "./Home";

function User() {
  const { id } = useParams();

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

function Login() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={() => navigate("/user/101")}>
        Login
      </button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        <NavLink to="/">Home</NavLink>{" | "}
        <NavLink to="/user/101">User</NavLink>{" | "}
        <NavLink to="/login">Login</NavLink>
      </nav>

      <hr />

      <Link to="/user/102">View User 102</Link>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;