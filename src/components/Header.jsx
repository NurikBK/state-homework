import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h4>
        <a href="/">Project</a>
      </h4>
      <button className="menu-btn"></button>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a href="#learn-more ">About us</a>
          </li>
          <li>
            <Link to="/community">Community</Link>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
