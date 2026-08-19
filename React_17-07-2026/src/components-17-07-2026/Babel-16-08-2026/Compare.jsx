import React from "react";

function Compare() {

  return (
    <div>

      <h2>Before and After Babel</h2>


      <h3>Before Babel - Modern JavaScript</h3>

      <pre>
{`const add = (a, b) => a + b;

const name = "Ravi";

const message = \`Hello \${name}\`;`}
      </pre>


      <h3>After Babel - Simplified Example</h3>

      <pre>
{`var add = function(a, b) {
  return a + b;
};

var name = "Ravi";

var message = "Hello " + name;`}
      </pre>


      <h3>Purpose</h3>

      <p>
        Babel transforms modern JavaScript syntax
        into syntax that older browsers can understand.
      </p>

    </div>
  );
}

export default Compare;