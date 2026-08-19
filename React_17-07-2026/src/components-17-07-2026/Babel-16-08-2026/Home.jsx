import React from "react";

import FeatureCard from "./FeatureCard";

function Home() {

  return (
    <div>

      <h2>Home Page</h2>

      <FeatureCard
        title="What is Babel?"
        description="Babel converts modern JavaScript into browser-compatible JavaScript."
      />

      <FeatureCard
        title="ES6+"
        description="Babel can transform modern JavaScript syntax."
      />

      <FeatureCard
        title="Presets"
        description="Presets provide groups of Babel plugins."
      />

      <FeatureCard
        title="Plugins"
        description="Plugins transform specific JavaScript features."
      />

    </div>
  );
}

export default Home;