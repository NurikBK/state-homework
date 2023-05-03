import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const setActive = ({ isActive }) => (isActive ? 'link active' : 'link');
  return (
    <header className="header">
      <h4>
        <Link to="/">Logo</Link>
      </h4>
      <button className="menu-btn"></button>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink to="/" className={setActive}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={setActive}>
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className={setActive}>
              Community
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={setActive}>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
