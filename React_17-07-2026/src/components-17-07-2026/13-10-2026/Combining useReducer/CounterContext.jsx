
import {
  createContext,
  useContext,
  useReducer,
} from "react";

const CounterContext = createContext(null);

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };

    case "DECREMENT":
      return { count: state.count - 1 };

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(
    counterReducer,
    initialState
  );

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  const context = useContext(CounterContext);

  if (context === null) {
    throw new Error(
      "useCounter must be used inside CounterProvider"
    );
  }

  return context;
}
