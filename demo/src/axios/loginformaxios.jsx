// import React, { useState } from 'react';
// import axios from 'axios';
// import { formFields } from '../formfields';


// const LoginForm = ({ history }) => {
// const [formData, setFormData] = useState({
//  username: '',
//  password: '',
// });

//   const [errors, setErrors] = useState({});
//   const handleInputChange = (e) => {
//   const { name, value } = e.target;
//   setFormData({
    
//      ...formData,
//      [name]: value,
// });
//   setErrors({ ...errors, [name]: '' });
//  };

// const validateForm = () => {
// let formErrors = {};
// let isValid = true;
// if (!formData.username.trim()) {
// formErrors.username = 'Username is required';//user naemvalidation
// isValid = false;
// }

//  if (!formData.password.trim()) {
//   formErrors.password = 'Password is required';
//   isValid = false;
// }
// setErrors(formErrors);
// return isValid;
// };
// const handleLogin = async () => {
// if (!validateForm()) return;
// console.log(JSON.stringify({
    
//   username: formData.username,
//   password: formData.password,
// }))
// try {
//  const response = await axios.post('https://dummyjson.com/auth/login', JSON.stringify({
    
//  username: formData.username,
//  password: formData.password,

// }))
//    if (response.data.success) {
//       history.push('/dashboard');//.then
//     } 
//     else
//      {
//       alert('Login failed. Please try again.');
//       }

//     } 
//     catch (error) 
//     {
//      console.error('Error logging in:', error);
//     }
//     };
// return (
//    <div>
//         <h2>Login</h2>
//             <label>UserName:</label>
//                 <input
//                      type="text"
//                      name="username"
//                       placeholder="Username"
//                       value={formData.username}
//                       onChange={handleInputChange}
// />
//      {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
//       <br />
//       <br />

//       <label>Password:</label>
//         <input
//            type="password"
//            name="password"
//            placeholder="Password"
//            value={formData.password}
//            onChange={handleInputChange}/>
//     {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
//     <br />
//     <br />
//         <button onClick={handleLogin}>Login</button>
//     </div>
// );
// };

// export default LoginFormAxios;