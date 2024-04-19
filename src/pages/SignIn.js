import React, { useState } from 'react';
import { account } from '../lib/appwrite';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'

const SignIn = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
 const navigate=useNavigate();



  async function login(email, password) {
    try {
      await account.createEmailSession(email, password);
      setLoggedInUser(await account.get());
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <div className="login-container">
          <p>
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : 'Not logged in'}
      </p>
      <h2>Login</h2>
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
        <button type="submit" onClick={() => login(email, password)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
