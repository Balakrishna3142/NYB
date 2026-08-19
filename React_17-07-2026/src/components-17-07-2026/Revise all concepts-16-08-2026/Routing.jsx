import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

function Product() {

  const { id } = useParams();

  return (
    <div>

      <h3>Dynamic Product Page</h3>

      <p>
        Product ID: {id}
      </p>

      <Link to="/routing">
        Back
      </Link>

    </div>
  );
}


function Routing() {

  const navigate = useNavigate();

  return (
    <div>

      <h2>Browser Routing</h2>

      <p>
        React Router uses client-side routing.
      </p>

      <h3>Dynamic Route Example</h3>

      <Link to="/product/101">
        Open Product 101
      </Link>

      <br />

      <button
        onClick={() => navigate("/")}
      >
        Navigate Home
      </button>

    </div>
  );
}

export { Product };

export default Routing;