import { render, screen } from '@testing-library/react';
import { test, expect } from 'vitest';
import Welcome from './Welcome'

test('renders the Welcome component', () => {
  render(<Welcome />);

  expect(
    screen.getByRole('heading', { name: 'Welcome to React' })
  ).toBeInTheDocument();

  expect(
    screen.getByText('This is my first component test.')
  ).toBeInTheDocument();

  expect(
    screen.getByRole('button', { name: 'Click Me' })
  ).toBeInTheDocument();
});