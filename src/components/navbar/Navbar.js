import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

export default function navbar() {
  return (
    <div className="navbar-root">
      <div className="navbar-links-container">
        <Link to="/" className="navbar-link">
          <h2>Home</h2>
        </Link>
        <Link to="/projects" className="navbar-link">
          <h2>Projects</h2>
        </Link>
        <Link to="/about" className="navbar-link">
          <h2>About</h2>
        </Link>
      </div>
    </div>
  );
}
