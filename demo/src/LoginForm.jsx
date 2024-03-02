// LoginForm.js
import React from 'react';
import { useUser } from './context';

const LoginForm = () => {
  const { user, login, logout } = useUser();

  return (
    <div>
      {user.isAuthenticated ? (
        <div>
          <p>Welcome, {user.username}! You are logged in.</p>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in.</p>
          <button onClick={() => login('prathi')}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
