import React, { useState } from "react";

const DropdownField = () => {
  const [course, setCourse] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(course);
  };

  return (
    <div>
      <h2>Course Selection</h2>

      <form onSubmit={handleSubmit}>
        <label>Select Course: </label>

        <select
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select Course</option>
          <option value="React">React</option>
          <option value="JavaScript">JavaScript</option>
          <option value="Node JS">Node JS</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      <p>Selected Course: {course}</p>
    </div>
  );
};

export default DropdownField;