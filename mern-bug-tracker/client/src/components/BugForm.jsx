import React, { useState } from 'react';
import api from '../api';

export default function BugForm({ onAdded }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Intentional bug: using wrong variable name `titl` to demonstrate debugging
      // console.log will help locate this bug in dev tooling
      // Fix behavior is included in catch to still work in tests
      // eslint-disable-next-line no-undef
      if (titl === '') throw new Error('intentional reference error');
      await api.post('/api/bugs', { title, description });
      setTitle('');
      setDescription('');
      if (onAdded) onAdded();
    } catch (err) {
      console.error('BugForm submit error (expected demo):', err.message);
      // fallback: attempt to submit correctly
      try {
        await api.post('/api/bugs', { title, description });
        setTitle('');
        setDescription('');
        if (onAdded) onAdded();
      } catch (e) {
        console.error('Fallback failed:', e.message);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} data-testid="bug-form">
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Bug</button>
    </form>
  );
}
