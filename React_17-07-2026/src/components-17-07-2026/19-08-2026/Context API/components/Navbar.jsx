import { useTheme } from "../context/ThemeContext";

function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h2>My Application</h2>

      <p>Current Theme: {theme}</p>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default Navbar;