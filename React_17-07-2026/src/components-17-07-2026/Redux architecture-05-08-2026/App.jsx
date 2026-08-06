import { Provider } from "react-redux";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import Home from "./Home"

// Redux Slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count++;
    },
    decrement: (state) => {
      state.count--;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

// Store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;