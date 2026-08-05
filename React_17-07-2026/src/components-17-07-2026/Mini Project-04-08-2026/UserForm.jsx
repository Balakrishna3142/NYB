import { useState, useEffect } from "react";

function UserForm({
  selected,
  saveUser,
}) {
  const [name, setName] =
    useState("");

  const [email, setEmail] =
    useState("");

  useEffect(() => {
    if (selected) {
      setName(selected.name);
      setEmail(selected.email);
    }
  }, [selected]);

  const submit = (e) => {
    e.preventDefault();

    saveUser({
      id: selected?.id,
      name,
      email,
    });

    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={submit}>
      <input
        value={name}
        placeholder="Name"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        value={email}
        placeholder="Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <button>
        {selected
          ? "Update"
          : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;