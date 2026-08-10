import React from "react";
import { Routes, Route } from "react-router-dom";

import MiniPractice from "./MiniPractice";

function App() {
  return (
    <Routes>
      <Route
        path="/mini-practice"
        element={<MiniPractice />}
      />
    </Routes>
  );
}

export default App;