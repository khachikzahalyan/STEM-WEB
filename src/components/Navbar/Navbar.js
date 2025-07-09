import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const menuItems = [
    { name: 'About', path: '/about' },
    { name: 'Importance', path: '/importance' },
    { name: 'Problems', path: '/problems' },
    { name: 'Future', path: '/future' },
    { name: 'Sources', path: '/sources' },
  ];

  return (
    <header className="navbar">
      <div className="navbar__top">
        <div className="navbar__logo">
          <span className="logo-icon">✧</span> STEM LEARNING
        </div>
        <nav className="navbar__menu">
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`navbar__menu-item ${
                location.pathname === path ? 'active' : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
