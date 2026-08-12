import { useState } from "react";

function Form() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      <input
        name="name"
        placeholder="Name"
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        onChange={handleChange}
      />

      <input
        name="phone"
        placeholder="Phone"
        onChange={handleChange}
      />

      <p>Name: {form.name}</p>
      <p>Email: {form.email}</p>
      <p>Phone: {form.phone}</p>
    </div>
  );
}

export default Form;