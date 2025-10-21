import React, { useState } from 'react';
import api from '../api';

export default function BugItem({ bug, onChange }) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(bug.title);
  const [status, setStatus] = useState(bug.status || 'open');

  const save = async () => {
    try {
      await api.put(`/api/bugs/${bug._id || bug.id}`, { title, status });
      setEditing(false);
      if (onChange) onChange();
    } catch (err) {
      console.error('Failed to save', err.message);
    }
  };

  const remove = async () => {
    try {
      await api.delete(`/api/bugs/${bug._id || bug.id}`);
      if (onChange) onChange();
    } catch (err) {
      console.error('Failed to delete', err.message);
    }
  };

  return (
    <li>
      {editing ? (
        <>
          <input value={title} onChange={(e) => setTitle(e.target.value)} />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="open">open</option>
            <option value="in-progress">in-progress</option>
            <option value="closed">closed</option>
          </select>
          <button onClick={save}>Save</button>
          <button onClick={() => setEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <strong>{bug.title}</strong> <em>({bug.status})</em>
          <button onClick={() => setEditing(true)}>Edit</button>
          <button onClick={remove}>Delete</button>
        </>
      )}
    </li>
  );
}
