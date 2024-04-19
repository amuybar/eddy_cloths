import React, { useState } from 'react';
import Header from '../components/Account/Header.js'; 
import LoginForm from '../components/Account/LoginForm.js'; 
import RegistrationForm from '../components/Account/RegistrationForm.js'; 
import UserProfile from '../components/Account/UserProfile.js'; 
import OrderHistory from '../components/Account/OrderHistory.js'; 
import Footer from '../components/Account/Footer.js'; 

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogin = () => {
    setIsLoggedIn(true); 
  };

  const handleLogout = () => {
    setIsLoggedIn(false); 
  };

  return (
    <div className="account">
      <Header />
      {isLoggedIn ? (
        <>
          <UserProfile onLogout={handleLogout} /> {/* User profile management */}
          <OrderHistory /> {/* Order history display */}
        </>
      ) : (
        <>
          <LoginForm onLogin={handleLogin} /> {/* Login form */}
          <RegistrationForm /> {/* Registration form */}
        </>
      )}
      <Footer />
    </div>
  );
};

export default Account;
