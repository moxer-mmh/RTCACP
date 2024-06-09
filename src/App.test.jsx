import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders My Github', () => {
  render(<App />);
  const linkElement = screen.getByText(/My Github/i);
  expect(linkElement).toBeDefined();
});
