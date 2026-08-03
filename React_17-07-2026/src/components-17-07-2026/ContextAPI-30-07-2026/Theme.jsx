import { useContext } from "react";
import  Dashboard from "./Dashboard";

function Theme() {

  const { theme, setTheme } = useContext(AppContext);

  return (
    <div>

      <h2>Theme : {theme}</h2>

      <button
        onClick={() =>
          setTheme(theme === "Light" ? "Dark" : "Light")
        }
      >
        Change Theme
      </button>

    </div>
  );
}

export default Theme;