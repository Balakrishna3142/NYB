
import {
  createContext,
  useContext,
  useReducer,
} from "react";

const GlobalContext = createContext(null);

const initialState = {
  user: "Ravi",
  count: 0,
  theme: "light",
};

function globalReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "CHANGE_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "TOGGLE_THEME":
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };

    default:
      return state;
  }
}

export function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(
    globalReducer,
    initialState
  );

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);

  if (context === null) {
    throw new Error("useGlobal must be used inside GlobalProvider");
  }

  return context;
}
