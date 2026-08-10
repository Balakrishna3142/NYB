import React, { useState } from "react";

const CheckboxField = () => {
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(terms);
  };

  return (
    <div>
      <h2>Checkbox Example</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
          />

          I agree to the terms and conditions
        </label>

        <br />
        <br />

        <button type="submit">Submit</button>
      </form>

      <p>
        Terms Accepted: {terms ? "Yes" : "No"}
      </p>
    </div>
  );
};

export default CheckboxField;