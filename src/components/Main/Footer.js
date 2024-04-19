import React from 'react';
import '../../styles/Main/Footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const Footer = () => {
  const socialLinks = [
    { icon: faFacebook, url: 'https://www.facebook.com' }, // Use imported icons
    { icon: faTwitter, url: 'https://www.twitter.com' }, 
    { icon: faInstagram, url: 'https://www.instagram.com' }, 
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>
            <a href="mailto:info@littleeddy.com">info@littleeddy.com</a>
          </p>
          <p>+254 7Nairobi 123 4567</p>
          <p>123 Main Street, Nairobi, Kenya</p>
        </div>
        <div className="footer-links">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="/">About Us</a>
            </li>
            <li>
              <a href="/">Shop</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>
          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} target="_blank" rel="noreferrer noopener">
                  <FontAwesomeIcon icon={link.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>&copy; 2024 Little Eddy. Developed by Barrack Amuyunzu</p>
      </div>
    </footer>
  );
};

export default Footer;
