import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Bug Tracker</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/bugs">Bug List</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
