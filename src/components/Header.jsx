import React from 'react';


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
            <a href="/">Projects</a>
          </li>
          <li>
            <a href="#learn-more ">About us</a>
          </li>
          <li>
            <a href="#main">Stories</a>
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
