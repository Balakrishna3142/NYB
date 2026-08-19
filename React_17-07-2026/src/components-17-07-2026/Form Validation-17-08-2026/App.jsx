import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import ValidationPage from "./ValidationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/validation"
          element={<ValidationPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;