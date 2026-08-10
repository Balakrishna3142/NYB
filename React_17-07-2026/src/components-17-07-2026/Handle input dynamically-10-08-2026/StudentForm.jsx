import React, { useState } from "react";

const StudentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    course: "",
  });

  // Dynamic input handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
  };

  return (
    <div>
      <h2>Student Registration</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <div>
          <label>Name: </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </div>

        <br />

        {/* Email */}
        <div>
          <label>Email: </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </div>

        <br />

        {/* Age */}
        <div>
          <label>Age: </label>

          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter age"
          />
        </div>

        <br />

        {/* Course */}
        <div>
          <label>Course: </label>

          <select
            name="course"
            value={formData.course}
            onChange={handleChange}
          >
            <option value="">Select Course</option>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Node">Node JS</option>
          </select>
        </div>

        <br />

        <button type="submit">
          Submit
        </button>
      </form>

      <hr />

      <h3>Student Details</h3>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      <p>Course: {formData.course}</p>
    </div>
  );
};

export default StudentForm;