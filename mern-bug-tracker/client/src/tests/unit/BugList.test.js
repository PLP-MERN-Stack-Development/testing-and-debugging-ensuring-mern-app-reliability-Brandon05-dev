import React from 'react';
import { render, screen } from '@testing-library/react';
import BugList from '../../components/BugList';

test('shows no bugs message', () => {
  render(<BugList bugs={[]} />);
  expect(screen.getByTestId('no-bugs')).toBeInTheDocument();
});
