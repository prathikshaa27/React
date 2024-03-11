import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState(null);
  
  const handleLogin = async () => {
    try {
      const response = await axios.post('https://localhost:3000', {
        username: username,
        password: password,
      });
      if (response.status === 200) {
        setLoginStatus('Login successful!');
      } else {
        setLoginStatus('Login failed - Unknown error');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        setLoginStatus('Login failed - Invalid credentials');
      } else {
        setLoginStatus('Login failed - Network error');
      }
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
      {loginStatus && <p>{loginStatus}</p>}
    </div>
  );
};

export default LoginForm;
