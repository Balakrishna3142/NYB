import React from "react";
import { Routes, Route } from "react-router-dom";

import ApiDataPage from "./APIDataPage";

function App() {
  return (
    <Routes>
      <Route
        path="/api-data"
        element={<ApiDataPage />}
      />
    </Routes>
  );
}

export default App;