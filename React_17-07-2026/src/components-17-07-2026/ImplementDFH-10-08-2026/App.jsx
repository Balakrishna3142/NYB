import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import TextFieldPage from "./pages/TextFieldPage";
import TextAreaPage from "./pages/TextAreaPage";
import DropdownPage from "./pages/DropdownPage";
import RadioPage from "./pages/RadioPage";
import CheckboxPage from "./pages/CheckboxPage";
import FileInputPage from "./pages/FileInputPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/text-field"
          element={<TextFieldPage />}
        />

        <Route
          path="/text-area"
          element={<TextAreaPage />}
        />

        <Route
          path="/dropdown"
          element={<DropdownPage />}
        />

        <Route
          path="/radio"
          element={<RadioPage />}
        />

        <Route
          path="/checkbox"
          element={<CheckboxPage />}
        />

        <Route
          path="/file-input"
          element={<FileInputPage />}
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;