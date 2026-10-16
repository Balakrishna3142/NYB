import { useState } from 'react';

export default function RegistrationForm() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setSuccess(false);

    if (!form.username.trim()) {
      setError('Username is required');
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      setError('Enter a valid email');
    } else if (form.password.length < 6) {
      setError('Password must be at least 6 characters');
    } else {
      setSuccess(true);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={form.username}
        onChange={(e) =>
          setForm({ ...form, username: e.target.value })
        }
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        value={form.email}
        onChange={(e) =>
          setForm({ ...form, email: e.target.value })
        }
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={form.password}
        onChange={(e) =>
          setForm({ ...form, password: e.target.value })
        }
      />

      <button type="submit">Register</button>

      {error && <p role="alert">{error}</p>}
      {success && (
        <p role="status">Registration successful!</p>
      )}
    </form>
  );
}