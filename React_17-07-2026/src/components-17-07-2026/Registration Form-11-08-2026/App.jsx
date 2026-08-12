import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    country: "",
    skills: [],
    resume: null,
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  // Handle all input fields
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "checkbox") {
      setFormData({
        ...formData,
        skills: checked
          ? [...formData.skills, value]
          : formData.skills.filter((skill) => skill !== value),
      });
    } else if (type === "file") {
      setFormData({
        ...formData,
        resume: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }

    // Remove error when user changes the field
    setErrors({
      ...errors,
      [name]: "",
    });

    setSuccess("");
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password =
        "Password must be at least 6 characters";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select gender";
    }

    if (!formData.country) {
      newErrors.country = "Please select country";
    }

    if (formData.skills.length === 0) {
      newErrors.skills = "Select at least one skill";
    }

    if (!formData.resume) {
      newErrors.resume = "Please upload your resume";
    }

    return newErrors;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSuccess("Registration successful!");

    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        <label>Name:</label>
        <br />

        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        {errors.name && <p>{errors.name}</p>}

        <br />

        {/* Email */}
        <label>Email:</label>
        <br />

        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors.email && <p>{errors.email}</p>}

        <br />

        {/* Password */}
        <label>Password:</label>
        <br />

        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter password"
        />

        {errors.password && <p>{errors.password}</p>}

        <br />

        {/* Gender */}
        <label>Gender:</label>
        <br />

        <input
          type="radio"
          name="gender"
          value="Male"
          checked={formData.gender === "Male"}
          onChange={handleChange}
        />
        Male

        <input
          type="radio"
          name="gender"
          value="Female"
          checked={formData.gender === "Female"}
          onChange={handleChange}
        />
        Female

        {errors.gender && <p>{errors.gender}</p>}

        <br />
        <br />

        {/* Country */}
        <label>Country:</label>
        <br />

        <select
          name="country"
          value={formData.country}
          onChange={handleChange}
        >
          <option value="">Select Country</option>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
        </select>

        {errors.country && <p>{errors.country}</p>}

        <br />
        <br />

        {/* Skills */}
        <label>Skills:</label>
        <br />

        <input
          type="checkbox"
          name="skills"
          value="React"
          checked={formData.skills.includes("React")}
          onChange={handleChange}
        />
        React

        <input
          type="checkbox"
          name="skills"
          value="JavaScript"
          checked={formData.skills.includes("JavaScript")}
          onChange={handleChange}
        />
        JavaScript

        <input
          type="checkbox"
          name="skills"
          value="HTML"
          checked={formData.skills.includes("HTML")}
          onChange={handleChange}
        />
        HTML

        {errors.skills && <p>{errors.skills}</p>}

        <br />
        <br />

        {/* File */}
        <label>Resume:</label>
        <br />

        <input
          type="file"
          name="resume"
          onChange={handleChange}
        />

        {errors.resume && <p>{errors.resume}</p>}

        <br />
        <br />

        <button type="submit">
          Register
        </button>

      </form>

      {/* Success Message */}
      {success && <h3>{success}</h3>}
    </div>
  );
}

export default App;