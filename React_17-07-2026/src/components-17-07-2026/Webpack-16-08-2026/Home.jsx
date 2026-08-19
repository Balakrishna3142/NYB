import React from "react";
import Card from "./Card";

function Home() {
  return (
    <div>

      <h1>Home Page</h1>

      <p>
        Welcome to the Webpack Learning Project.
      </p>

      <Card
        title="Module Bundling"
        description="Webpack combines multiple modules into bundles."
      />

      <Card
        title="Entry"
        description="Entry tells Webpack where the application starts."
      />

      <Card
        title="Output"
        description="Output tells Webpack where to create the bundle."
      />

    </div>
  );
}

export default Home;