import React from "react";
import '../styles/Footer.css';
import logo from '../images/logo.webp'; // Adjust the path as necessary

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <img src={logo} alt="Logo" className="footer-logo" />
        <a href="mailto:contact@bakra.live" className="footer-email">contact@bakra.live</a>
        <p className="footer-catchy-line">Get your premium goat without visiting the market – free home delivery!</p>
        <p className="footer-text">© 2024 Bakra.live. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
