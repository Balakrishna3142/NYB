
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';
import Counter from './Counter';

test('counter increments when button is clicked', async () => {
  const user = userEvent.setup();

  render(<Counter />);

  // Check initial value
  expect(screen.getByText('Count: 0'))
    .toBeInTheDocument();

  // Click the button
  await user.click(
    screen.getByRole('button', { name: 'Increment' })
  );

  // Check updated value
  expect(screen.getByText('Count: 1'))
    .toBeInTheDocument();
});
