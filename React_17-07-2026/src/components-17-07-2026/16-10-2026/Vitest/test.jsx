
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import App from './App';

test('renders heading and initial count', () => {
  render(<App />);

  expect(
    screen.getByText('Vitest Testing Example')
  ).toBeInTheDocument();

  expect(screen.getByText('Count: 0'))
    .toBeInTheDocument();
});

test('increments count when button is clicked', async () => {
  const user = userEvent.setup();

  render(<App />);

  await user.click(
    screen.getByRole('button', { name: 'Increment' })
  );

  expect(screen.getByText('Count: 1'))
    .toBeInTheDocument();
});
