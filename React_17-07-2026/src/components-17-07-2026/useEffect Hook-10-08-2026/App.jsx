import React from "react";
import { Routes, Route } from "react-router-dom";

import UseEffectPage from "./UseEffectPage";

function App() {
  return (
    <Routes>
      <Route
        path="/use-effect"
        element={<UseEffectPage />}
      />
    </Routes>
  );
}

export default App;