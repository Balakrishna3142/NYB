import { useTheme } from "../context/ThemeContext";

function Content() {
  const { theme } = useTheme();

  return (
    <div>
      <h2>Content</h2>

      <p>
        Current theme is: {theme}
      </p>
    </div>
  );
}

export default Content;