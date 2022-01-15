/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

export function Navbar() {
  return (
    <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
      <h1 className="title is-2 navbar-title">Movieland</h1>
      <div className="navbar-end">
        <NavLink className="navbar-item subtitle is-4" to="/search">
          Search
        </NavLink>
        <NavLink className="navbar-item subtitle is-4" to="/popular">
          Popular
        </NavLink>
        <NavLink className="navbar-item subtitle is-4" to="/favorites">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
}
