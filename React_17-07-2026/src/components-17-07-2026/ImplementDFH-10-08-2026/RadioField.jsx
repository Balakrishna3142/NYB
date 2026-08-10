import React, { useState } from "react";

const RadioField = () => {
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(gender);
  };

  return (
    <div>
      <h2>Gender Selection</h2>

      <form onSubmit={handleSubmit}>
        <p>Select Gender:</p>

        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>

        <br />

        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>

        <br />

        <button type="submit">Submit</button>
      </form>

      <p>Selected Gender: {gender}</p>
    </div>
  );
};

export default RadioField;