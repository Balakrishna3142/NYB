import { useState } from "react";
import FormField from "./FormField";

const DynamicForm = ({ config }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox") {
      setFormData((prev) => {
        const currentValues = prev[name] || [];

        const updatedValues = checked
          ? [...currentValues, value]
          : currentValues.filter((item) => item !== value);

        return {
          ...prev,
          [name]: updatedValues,
        };
      });

      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form Data:", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {config.map((field) => (
        <FormField
          key={field.name}
          field={field}
          value={formData[field.name]}
          onChange={handleChange}
        />
      ))}

      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;