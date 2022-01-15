/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar is-dark is-large" role="navigation" aria-label="main navigation">
      <h1 className="navbar-brand is-spaced">Movieland</h1>
      <div className="navbar-end">
        <NavLink className="navbar-item" to="/search">
          Search
        </NavLink>
        <NavLink className="navbar-item" to="/popular">
          Popular
        </NavLink>
        <NavLink className="navbar-item" to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
