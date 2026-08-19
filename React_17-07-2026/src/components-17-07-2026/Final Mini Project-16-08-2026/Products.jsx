import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h2>Products Page</h2>

      <p>Select a product:</p>

      <ul>
        <li>
          <Link to="101">Laptop</Link>
        </li>

        <li>
          <Link to="102">Mobile</Link>
        </li>

        <li>
          <Link to="103">Headphones</Link>
        </li>
      </ul>

      <hr />

      <Outlet />
    </div>
  );
}

export default Products;