import { useState } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
    city: "",
  });

  // Handle all input fields dynamically
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    alert("Form Submitted Successfully!");
  };

  return (
    <div>
      <h1>Dynamic Form</h1>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <br />
        <br />

        <label>Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <br />
        <br />

        <label>City:</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          placeholder="Enter your city"
        />

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <hr />

      <h2>Form Data</h2>

      <p>Name: {formData.name}</p>
      <p>Email: {formData.email}</p>
      <p>Age: {formData.age}</p>
      <p>City: {formData.city}</p>
    </div>
  );
}

export default DynamicForm;