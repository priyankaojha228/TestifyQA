import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [bugs, setBugs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  // Fetch bugs from the API
  useEffect(() => {
    const fetchBugs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/bugs');
        setBugs(response.data);
      } catch (error) {
        setError('Failed to fetch bugs. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBugs();
  }, []); // Empty dependency array ensures useEffect runs only once

  return (
    <div className="dashboard">
      <h1>Welcome to the Bug Tracker Dashboard</h1>

      {loading && <p>Loading bugs...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table className="bug-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Assigned To</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug, index) => (
              <tr key={bug._id}>
                <td>{index + 1}</td>
                <td>{bug.title}</td>
                <td>{bug.description}</td>
                <td>{bug.status}</td>
                <td>{bug.assignedTo}</td>
                {/* Dynamically apply CSS class based on priority */}
                <td className={`priority-${bug.priority.toLowerCase()}`}>{bug.priority}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
