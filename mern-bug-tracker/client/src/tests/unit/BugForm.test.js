import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../../components/BugForm';
import api from '../../api';

jest.mock('../../api');

test('renders form and submits', async () => {
  api.post.mockResolvedValue({ data: {} });
  const onAdded = jest.fn();
  render(<BugForm onAdded={onAdded} />);

  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'A bug' } });
  fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'desc' } });
  fireEvent.click(screen.getByText('Add Bug'));

  // wait for the fallback api.post call to have been called
  await screen.findByTestId('bug-form');
  expect(api.post).toHaveBeenCalled();
});
