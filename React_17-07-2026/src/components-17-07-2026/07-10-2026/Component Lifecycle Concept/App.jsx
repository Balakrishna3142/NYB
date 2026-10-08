import { useState } from "react";
import UserProfile from "./UserProfile";

function App() {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <div>
      <h1>React Component Lifecycle</h1>

      <button onClick={() => setShowProfile(!showProfile)}>
        {showProfile ? "Hide Profile" : "Show Profile"}
      </button>

      {showProfile && <UserProfile />}
    </div>
  );
}

export default App;