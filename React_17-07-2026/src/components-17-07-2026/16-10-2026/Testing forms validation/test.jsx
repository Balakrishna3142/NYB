import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import RegistrationForm from './RegistrationForm';

test('shows error for empty username', async () => {
  const user = userEvent.setup();
  render(<RegistrationForm />);

  await user.click(
    screen.getByRole('button', { name: 'Register' })
  );

  expect(screen.getByRole('alert'))
    .toHaveTextContent('Username is required');
});

test('shows error for invalid email', async () => {
  const user = userEvent.setup();
  render(<RegistrationForm />);

  await user.type(
    screen.getByLabelText('Username'),
    'Alex'
  );

  await user.type(
    screen.getByLabelText('Email'),
    'wrong-email'
  );

  await user.type(
    screen.getByLabelText('Password'),
    'secret123'
  );

  await user.click(
    screen.getByRole('button', { name: 'Register' })
  );

  expect(screen.getByRole('alert'))
    .toHaveTextContent('Enter a valid email');
});

test('registers successfully with valid data', async () => {
  const user = userEvent.setup();
  render(<RegistrationForm />);

  await user.type(
    screen.getByLabelText('Username'),
    'Alex'
  );

  await user.type(
    screen.getByLabelText('Email'),
    'alex@example.com'
  );

  await user.type(
    screen.getByLabelText('Password'),
    'secret123'
  );

  await user.click(
    screen.getByRole('button', { name: 'Register' })
  );

  expect(screen.getByRole('status'))
    .toHaveTextContent('Registration successful!');
});