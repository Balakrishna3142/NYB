import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import Counter from './Counter'

test('counter increments when button is clicked', async () => {
  const user = userEvent.setup();

  render(<Counter />);

  // Check initial count
  expect(screen.getByText('Count: 0'))
    .toBeInTheDocument();

  // Click increment button
  await user.click(
    screen.getByRole('button', { name: 'Increment' })
  );

  // Check updated count
  expect(screen.getByText('Count: 1'))
    .toBeInTheDocument();
});