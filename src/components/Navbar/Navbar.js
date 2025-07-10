import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Մեր մասին', path: '/about' },
    { name: 'Կարևոր', path: '/importance' },
    { name: 'Խնդիրներ', path: '/problems' },
    { name: 'Ապագա', path: '/future' },
    { name: 'Նյութեր', path: '/sources' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="navbar__top">
        <Link to="/" className="navbar__logo">
          <img
            alt="logo"
            src="https://images.ctfassets.net/pc40tpn1u6ef/53uHpRwHaK9sso1qyHHEac/ff0836356ad19c1610be81b5ae6f06d4/STEM-Logo-220801.svg"
            className="logo-icon"
          />
        </Link>

        <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
          <span className={`burger-line ${isOpen ? 'open' : ''}`}></span>
        </button>

        <nav className={`navbar__menu ${isOpen ? 'open' : ''}`}>
          {menuItems.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`navbar__menu-item ${
                location.pathname === path ? 'active' : ''
              }`}
              onClick={() => setIsOpen(false)}
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
