import React from "react";

import NoDependency from "./NoDependency";
import EmptyDependency from "./EmptyDependency";
import WithDependency from "./WithDependency";
import CleanupExample from "./CleanupExample";

function UseEffectPage() {
  return (
    <div>
      <h1>React useEffect Examples</h1>

      <hr />

      <NoDependency />

      <hr />

      <EmptyDependency />

      <hr />

      <WithDependency />

      <hr />

      <CleanupExample />
    </div>
  );
}

export default UseEffectPage;