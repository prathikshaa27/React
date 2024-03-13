// // LoginForm.js
// import React, { useState } from 'react';
// import { useAuth } from './authContext'; // Update the path accordingly

// const LoginForm = () => {
//   const { isAuthenticated, login } = useAuth();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     await login(username, password);

//     if (isAuthenticated) {
//       console.log('Login successful!'); // Display a success message or navigate to a new page
//     } else {
//       console.log('Login failed!'); // Display an error message
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <label>
//         Username:
//         <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
