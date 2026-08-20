import ContextPage from "./pages/ContextPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <ContextPage />
    </ThemeProvider>
  );
}

export default App;