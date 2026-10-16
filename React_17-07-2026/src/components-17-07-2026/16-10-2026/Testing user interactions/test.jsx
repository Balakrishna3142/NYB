import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import Counter from './Counter'

test('tests increment and reset interactions', async () => {
  const user = userEvent.setup();

  render(<Counter />);

  // Check initial count
  expect(screen.getByText('Count: 0'))
    .toBeInTheDocument();

  // Click Increment
  await user.click(
    screen.getByRole('button', { name: 'Increment' })
  );

  expect(screen.getByText('Count: 1'))
    .toBeInTheDocument();

  // Click Reset
  await user.click(
    screen.getByRole('button', { name: 'Reset' })
  );

  expect(screen.getByText('Count: 0'))
    .toBeInTheDocument();
});