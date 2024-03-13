import React, { useState } from 'react';
import axios from 'axios';

const LoginFormAxios = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const toHandleLogin = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/users');
      console.log(response)
      const users = response.data;
      const users1 = Object.entries(users)
      console.log(users1)
      const user = users1.find(
        (u) => u.username === username && u.password === password
      );
        console.log(user)
      if (user) {
        onLogin(user);
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      alert('Error fetching users');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={toHandleLogin}>Login</button>
    </div>
  );
};

export default LoginFormAxios;
