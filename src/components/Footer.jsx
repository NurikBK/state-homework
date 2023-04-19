import React from 'react';
import SmallLogo from '../assets/small-logo.webp';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-logo">
        <img src={SmallLogo} alt="logo" />
        <p>Project</p>
      </div>
      <address>
        123 Street,
        <br />
        Anytown, USA 12345 <br />
        <br />
        <a href="mailto: hello@website.com">hello@website.com</a>
      </address>
      <p>&copy; 2021 Project. All rights reserved</p>
    </footer>
  );
};

export default Footer;
