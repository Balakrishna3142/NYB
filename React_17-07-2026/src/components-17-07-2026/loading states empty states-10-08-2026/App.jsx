import React from "react";
import { Routes, Route } from "react-router-dom";

import StatesPage from "./StatesPage";

function App() {
  return (
    <Routes>
      <Route
        path="/states"
        element={<StatesPage />}
      />
    </Routes>
  );
}

export default App;