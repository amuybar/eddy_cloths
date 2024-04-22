import React, { useState, useEffect } from 'react';
import SignUp from '../../pages/SignUp';
import '../../styles/Main/RegistrationPopup.css';

const RegistrationPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Check if user is logged in
        const user = sessionStorage.getItem('user');
        if (user) {
            setIsLoggedIn(true); // User is logged in
        } else {
            setIsLoggedIn(false); // User is not logged in
        }

        // Set timeout to open popup after 60 seconds
        const timeoutId = setTimeout(() => setIsOpen(true), 60000);
        return () => clearTimeout(timeoutId);
    }, []);

    const closePopup = () => setIsOpen(false);

    return (
        <div className={`registration-popup ${isOpen ? 'active' : ''}`}>
            {isLoggedIn ? (
                // Display advertisement if user is logged in
                <>
                    <h2>Welcome! Enjoy our special promotion</h2>
                    <img src="/images/promotion.jpg" alt="Special Promotion" />
                    <button onClick={closePopup}>Close</button>
                </>
            ) : (
                // Display registration form if user is not logged in
                <>
                    <h2>Welcome! Register for an Account</h2>
                    <SignUp onClose={closePopup} />
                </>
            )}
        </div>
    );
};

export default RegistrationPopup;
