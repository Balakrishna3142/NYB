import React, { useState, useEffect } from "react";

const UserForm = ({ selectedUser, onSave }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (selectedUser) {
      setName(selectedUser.name);
      setEmail(selectedUser.email);
    } else {
      setName("");
      setEmail("");
    }
  }, [selectedUser]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave({
      id: selectedUser?.id,
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">
        {selectedUser ? "Update" : "Add"}
      </button>
    </form>
  );
};

export default UserForm;