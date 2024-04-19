import React from 'react';
import '../../styles/Main/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Little Eddy Logo" />
        <h1>Little Eddy</h1>
      </div>
      <nav>
        <ul>
          <li><a href="#home"><FontAwesomeIcon icon={faShoppingCart} /><span>Shop</span></a></li>
          <li><a href="#Cart"><FontAwesomeIcon icon={faUser} /><span>Cart</span></a></li>
          <li><a href="#products"><FontAwesomeIcon icon={faUser} /><span>Account</span></a></li>
          <li><a href="#contact"><FontAwesomeIcon icon={faSearch} /><span>Search</span></a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
