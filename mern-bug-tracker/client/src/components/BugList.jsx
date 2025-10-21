import React from 'react';
import BugItem from './BugItem';

export default function BugList({ bugs, onChange }) {
  if (!bugs || bugs.length === 0) return <div data-testid="no-bugs">No bugs</div>;
  return (
    <ul data-testid="bug-list">
      {bugs.map((b) => (
        <BugItem key={b._id || b.id} bug={b} onChange={onChange} />
      ))}
    </ul>
  );
}
