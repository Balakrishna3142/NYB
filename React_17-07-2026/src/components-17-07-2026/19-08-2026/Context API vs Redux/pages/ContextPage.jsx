import { useTheme } from "../context/ThemeContext";

function ContextPage() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <h1>Context API Example</h1>

      <h2>Current Theme: {theme}</h2>

      <button onClick={toggleTheme}>
        Change Theme
      </button>
    </div>
  );
}

export default ContextPage;