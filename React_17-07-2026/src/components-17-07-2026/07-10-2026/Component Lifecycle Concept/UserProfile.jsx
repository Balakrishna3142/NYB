import { useEffect, useState } from "react";

function UserProfile() {
  const [count, setCount] = useState(0);

  // Mounting
  useEffect(() => {
    console.log("Component Mounted");

    // Unmounting
    return () => {
      console.log("Component Unmounted");
    };
  }, []);

  // Updating
  useEffect(() => {
    console.log("Count Updated:", count);
  }, [count]);

  return (
    <div>
      <h2>User Profile</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

export default UserProfile;