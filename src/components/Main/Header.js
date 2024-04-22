import React, { useState, useEffect } from 'react';
import '../../styles/Main/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../services/auth_services';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [userData, setUserData] = useState(null); // State to store user data
  const navigate = useNavigate();



  const handleLoginNav = () => {
    navigate('/signin'); 
  };

  const handleRegisterNav = () => {
    navigate('/signup');
  };

  const handleLogout = async() => {
    try {
      await logout();
      setIsLoggedIn(false);
      setUserData(null);
      navigate('/');
    } catch (error) {
      
    }
   
  };

  useEffect(() => {
    // Retrieve user data from session storage
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUserData(user);
    }
  }, [isLoggedIn]);

  return (
    <header>
      <div className="logo">
        <img src="/images/logo.png" alt="Little Eddy Logo" />
        <h1>Kids Collection</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/shop"><FontAwesomeIcon icon={faShoppingCart} /><span>Shop</span></a></li>
          <li><a href="/cart"><FontAwesomeIcon icon={faUser} /><span>Cart</span></a></li>
          <li><a href="/account"><FontAwesomeIcon icon={faUser} /><span>Account</span></a></li>
          <li><a href="/search"><FontAwesomeIcon icon={faSearch} /><span>Search</span></a></li>
          <div className='auth'>
            {isLoggedIn ? (
              <>
                <p> {userData && userData.name}</p>
                <button onClick={handleLogout}>Logout</button>
              </>
            ) : (
              <>
                <button onClick={handleLoginNav}>LogIn</button>
                <button onClick={handleRegisterNav}>Register</button>
              </>
            )}
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
