import React, { useState } from "react";

const FileInputField = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(file);
  };

  return (
    <div>
      <h2>File Input</h2>

      <form onSubmit={handleSubmit}>
        <label>Select File:</label>

        <br />
        <br />

        <input
          type="file"
          onChange={handleFileChange}
        />

        <br />
        <br />

        <button type="submit">Upload</button>
      </form>

      {file && (
        <p>
          Selected File: {file.name}
        </p>
      )}
    </div>
  );
};

export default FileInputField;