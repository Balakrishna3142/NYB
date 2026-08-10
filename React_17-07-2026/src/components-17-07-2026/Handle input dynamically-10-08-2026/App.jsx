import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import StudentPage from "./StudentPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/student"
          element={<StudentPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;