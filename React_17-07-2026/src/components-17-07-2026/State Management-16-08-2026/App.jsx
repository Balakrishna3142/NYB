import React from "react";

import {
  Provider
} from "react-redux";

import {
  configureStore
} from "@reduxjs/toolkit";

import counterReducer
  from "./counterSlice";

import Home
  from "./Home";


const store = configureStore({

  reducer: {

    counter: counterReducer

  }

});


function App() {

  return (

    <Provider store={store}>

      <Home />

    </Provider>

  );
}

export default App;