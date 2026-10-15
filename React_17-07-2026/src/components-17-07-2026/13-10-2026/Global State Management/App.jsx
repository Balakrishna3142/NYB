
import { GlobalProvider, useGlobal } from "./context/GlobalContext";
import Header from "./Header";
import Profile from "./Profile";
import Counter from "./Counter";

function MainContent() {
  const { state } = useGlobal();

  return (
    <div
      style={{
        padding: "20px",
        minHeight: "250px",
        background: state.theme === "dark" ? "#222" : "#f2f2f2",
        color: state.theme === "dark" ? "white" : "black",
      }}
    >
      <Header />
      <Profile />
      <Counter />
    </div>
  );
}

export default function App() {
  return (
    <GlobalProvider>
      <h1>Global State Management</h1>
      <MainContent />
    </GlobalProvider>
  );
}
