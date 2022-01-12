/* eslint-disable import/prefer-default-export */
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <h1 className="title is-2">Movieland</h1>
      <NavLink className="navbar-item" to="/search">
        Search
      </NavLink>
      <NavLink className="navbar-item" to="/popular">
        Popular
      </NavLink>
      <NavLink className="navbar-item" to="/favorites">
        Favorites
      </NavLink>
      {/* <a className="navbar-item" href="/popular">
        Popular movies
      </a>
      <a className="navbar-item" href="/favorites">
        Favorites
      </a>
      <a className="navbar-item" href="/search">
        Search
      </a> */}
    </nav>
  );
}
