import React, { useState, useRef } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const fileRef = useRef();

  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Email:', emailRef.current.value);
    console.log('File:', fileRef.current.files[0]);
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>LoginForm</h1>
        <label>
          Username:
          <input type="text" value={username} onChange={handleUsernameChange} />
        </label>
        <br></br>
        <br></br>
      </div>
      <div>
        <label>
          Password:
          <input type="password" value={password} onChange={handlePasswordChange} />
        </label>
        <br></br>
        <br></br>
      </div>
    
      <div>
        <label>
          Email:
          <input type="email" ref={emailRef} />
        </label>
        <br></br>
        <br></br>
       
      </div>
      <div>
        <label>
          Upload File:
          <input type="file" ref={fileRef} />
          <br></br>
        </label>
      </div>
      <br></br>
      <br></br>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;