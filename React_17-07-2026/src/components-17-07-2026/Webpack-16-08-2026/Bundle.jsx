import React from "react";

function Bundle() {
  return (
    <div>

      <h1>Generated Bundle</h1>

      <p>
        Webpack combines application modules
        into bundle files.
      </p>

      <h3>Example Bundle</h3>

      <pre>
{`dist/
│
├── bundle.js
├── index.html
└── assets/
    ├── image.png
    └── style.css`}
      </pre>

      <h3>Bundle Process</h3>

      <p>
        Entry → Modules → Loaders → Plugins
        → Bundle → Output
      </p>

    </div>
  );
}

export default Bundle;