import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ShowHidePage from "./ShowHidePage";

function App() {
  return (
    
      <Routes>
        <Route
          path="/show-hide"
          element={<ShowHidePage />}
        />
      </Routes>
    
  );
}

export default App;