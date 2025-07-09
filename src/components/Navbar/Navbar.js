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
        <Link to="/" className="navbar__logo">
          <img src='https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg'  className="logo-icon"/>
        </Link>
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
