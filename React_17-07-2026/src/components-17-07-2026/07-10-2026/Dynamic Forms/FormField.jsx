const FormField = ({ field, value, onChange }) => {
  const { name, label, type, options = [], placeholder, required } = field;

  if (type === "select") {
    return (
      <div>
        <label>{label}</label>

        <select
          name={name}
          value={value || ""}
          onChange={onChange}
          required={required}
        >
          <option value="">Select {label}</option>

          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }

  if (type === "checkbox") {
    return (
      <div>
        <label>{label}</label>

        {options.map((option) => (
          <label key={option.value}>
            <input
              type="checkbox"
              name={name}
              value={option.value}
              checked={(value || []).includes(option.value)}
              onChange={onChange}
            />

            {option.label}
          </label>
        ))}
      </div>
    );
  }

  return (
    <div>
      <label>{label}</label>

      <input
        type={type}
        name={name}
        value={value || ""}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      />
    </div>
  );
};

export default FormField;