import React, { useState, useEffect } from 'react';
import '../styles/Account/AccountPage.css'; 

const AccountPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    if (user) {
      setUserData(user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="account-container">
      {isLoggedIn ? (
        <>
          <h2>Welcome, {userData.name}!</h2>
          <div className="user-details">
            <p>Email: {userData.email}</p>
            {/* Add other user details as needed */}
          </div>
          {/* Render order history and favorites */}
        </>
      ) : (
        <p>Please log in to view your account.</p>
      )}
    </div>
  );
};

export default AccountPage;
