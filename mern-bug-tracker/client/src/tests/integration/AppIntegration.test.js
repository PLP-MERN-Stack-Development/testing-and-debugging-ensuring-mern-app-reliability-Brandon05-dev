import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../App';
import api from '../../api';

jest.mock('../../api');

test('renders App and shows list', async () => {
  api.get.mockResolvedValue({ data: [{ _id: '1', title: 't1', status: 'open' }] });
  render(<App />);
  expect(await screen.findByText('MERN Bug Tracker')).toBeInTheDocument();
  expect(await screen.findByText('t1')).toBeInTheDocument();
});
