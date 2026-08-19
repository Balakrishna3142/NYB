import React from "react";
import {
  Link,
  Outlet
} from "react-router-dom";

function Services() {
  return (
    <div>
      <h2>Services Page</h2>

      <Link to="web">
        Web Development
      </Link>

      {" | "}

      <Link to="app">
        App Development
      </Link>

      <hr />

      <Outlet />
    </div>
  );
}

export function WebDevelopment() {
  return (
    <div>
      <h3>Web Development</h3>
      <p>We create modern web applications.</p>
    </div>
  );
}

export function AppDevelopment() {
  return (
    <div>
      <h3>App Development</h3>
      <p>We create mobile applications.</p>
    </div>
  );
}

export default Services;