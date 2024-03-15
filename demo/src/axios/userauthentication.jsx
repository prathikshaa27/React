import React, { useState } from 'react';
import { login } from './auth'; 

const LoginComponentAxios = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await login(username, password);
      console.log(response)
      console.log("Sucess You are logged in"); 
    } catch (error) {
      console.error('Login failed:', error);
      setError(error.message); 
    }
  };

  return (
    <div>
        <label>
            Username:
        </label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br></br>
      <br></br>
      <label>
        Password:
      </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Login</button>
      {error && <div>{error}</div>} 
    </div>
  );
};

export default LoginComponentAxios;
