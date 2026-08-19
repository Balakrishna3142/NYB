import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormHandlingPage from "./FormHandlingPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/form-handling"
          element={<FormHandlingPage />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;