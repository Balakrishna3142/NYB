
import { useState } from "react";

export default function Student() {
  const [student, setStudent] = useState({
    name: "Ravi",
    age: 20,
    skills: ["HTML", "CSS"],
  });

  const updateName = () => {
    setStudent((prev) => ({
      ...prev,
      name: "Kiran",
    }));
  };

  const increaseAge = () => {
    setStudent((prev) => ({
      ...prev,
      age: prev.age + 1,
    }));
  };

  const addSkill = () => {
    setStudent((prev) => ({
      ...prev,
      skills: [...prev.skills, "React"],
    }));
  };

  return (
    <div>
      <h2>Student Details</h2>

      <p>Name: {student.name}</p>
      <p>Age: {student.age}</p>
      <p>Skills: {student.skills.join(", ")}</p>

      <button onClick={updateName}>Update Name</button>
      <button onClick={increaseAge}>Increase Age</button>
      <button onClick={addSkill}>Add Skill</button>
    </div>
  );
}
