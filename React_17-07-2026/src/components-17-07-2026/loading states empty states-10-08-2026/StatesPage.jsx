import React from "react";

import LoadingState from "./LoadingState";
import EmptyState from "./EmptyState";

function StatesPage() {
  return (
    <div>
      <h1>React Loading and Empty States</h1>

      <hr />

      <LoadingState />

      <hr />

      <EmptyState />
    </div>
  );
}

export default StatesPage;