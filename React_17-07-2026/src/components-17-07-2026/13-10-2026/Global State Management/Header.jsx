
import { useGlobal } from "./GlobalContext";

export default function Header() {
  const { state, dispatch } = useGlobal();

  return (
    <header>
      <h2>Welcome, {state.user}</h2>

      <button
        onClick={() =>
          dispatch({
            type: "CHANGE_USER",
            payload: "Kiran",
          })
        }
      >
        Change User
      </button>

      <button
        onClick={() => dispatch({ type: "TOGGLE_THEME" })}
      >
        Toggle Theme
      </button>
    </header>
  );
}
