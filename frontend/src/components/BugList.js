import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BugList = () => {
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
  }, []);

  return (
    <div className="bug-list-container">
      <h2>Bug List</h2>

      {loading && <p>Loading bugs...</p>}
      {error && <p className="error">{error}</p>}

      {!loading && !error && (
        <table className="bug-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bugs.map((bug, index) => (
              <tr key={bug._id} className={`status-${bug.status.toLowerCase().replace(' ', '-')}`}>
                <td>{index + 1}</td>
                <td>{bug.title}</td>
                <td>{bug.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BugList;
