import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account, ID } from '../lib/appwrite';
import '../styles/Register.css';


const SignUp = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const navigate=useNavigate();

  async function register(email, password, name) {
    try {
      await account.create(ID.unique(), email, password, name);
      setLoggedInUser(await account.get());
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="register-container">
          <p>
        {loggedInUser ? `Already Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>
      <h2>Register</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={(e) => e.preventDefault()}>
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
        <button type="submit" onClick={() => register(email, password, name)}>
          Register
        </button>
      </form>
    </div>
  );
};

export default SignUp;
