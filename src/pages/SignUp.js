import React, { useState } from 'react';
import { register } from '../services/auth_services'; 
import { useNavigate, Link } from 'react-router-dom'; // Import Link from react-router-dom
import '../styles/Account/SignUp.css';

const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await register( name, email, password, phone );
      console.log(response); 
      navigate('/');
    } catch (error) {
      setError(error.message); 
    }
  };

  return (
    <div className="register-container">
      <p>{loggedInUser ? `Already Logged in as ${loggedInUser.name}` : 'Not logged in'}</p>
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <Link to="/signin">Sign in</Link></p> 
    </div>
  );
};

export default SignUp;
