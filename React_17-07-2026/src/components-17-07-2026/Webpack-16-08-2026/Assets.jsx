import React from "react";

function Assets() {
  return (
    <div>

      <h1>Asset Management</h1>

      <p>
        Webpack can process different application
        assets.
      </p>

      <ul>

        <li>JavaScript files</li>

        <li>CSS files</li>

        <li>Images</li>

        <li>Fonts</li>

        <li>JSON files</li>

      </ul>

      <h3>Example</h3>

      <pre>
{`import logo from "./logo.png";

<img src={logo} />`}
      </pre>

    </div>
  );
}

export default Assets;