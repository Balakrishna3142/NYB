import React from "react";
import { Routes, Route } from "react-router-dom";

import RoleBasedRendering from "./RoleBasedRendering";

function App() {
  return (
    <Routes>
      <Route
        path="/roles"
        element={<RoleBasedRendering />}
      />
    </Routes>
  );
}

export default App;