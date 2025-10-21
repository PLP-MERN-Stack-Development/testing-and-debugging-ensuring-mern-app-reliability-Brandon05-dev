import React, { useEffect, useState } from 'react';
import BugForm from './components/BugForm';
import BugList from './components/BugList';
import api from './api';
import ErrorBoundary from './ErrorBoundary';

export default function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    try {
      const res = await api.get('/api/bugs');
      setBugs(res.data);
    } catch (err) {
      console.error('Failed to fetch bugs', err);
    }
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  return (
    <ErrorBoundary>
      <div style={{ padding: 20 }}>
        <h1>MERN Bug Tracker</h1>
        <BugForm onAdded={fetchBugs} />
        <BugList bugs={bugs} onChange={fetchBugs} />
      </div>
    </ErrorBoundary>
  );
}
