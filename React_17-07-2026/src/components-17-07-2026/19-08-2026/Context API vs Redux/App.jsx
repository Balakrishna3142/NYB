import { ThemeProvider } from "./context/ThemeContext";
import ContextPage from "./pages/ContextPage";

function App() {
  return (
    <ThemeProvider>
      <ContextPage />
    </ThemeProvider>
  );
}

export default App;