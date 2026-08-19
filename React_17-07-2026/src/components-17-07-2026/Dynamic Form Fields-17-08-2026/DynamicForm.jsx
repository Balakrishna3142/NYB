import { useState } from "react";
import TextField from "./TextField";
import SelectField from "./SelectField";

function DynamicForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    gender: ""
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);
    alert("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Dynamic Form</h2>

      <TextField
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <TextField
        label="Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <SelectField
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default DynamicForm;