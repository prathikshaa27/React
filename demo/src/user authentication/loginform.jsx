import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ setIsLoggedIn }) => {
  const api = axios.create({
    baseURL: `https://dummyjson.com/auth/login`
  });

  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!formData.username.match(/^[a-zA-Z]+$/)) {
      errors.username = "Username should contain only alphabets";
      isValid = false;
    }
    if (!formData.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{5,}$/)) {
      errors.password = "Password should contain at least one number, one lowercase and one uppercase letter, and minimum 5 characters";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      api.get("/")
        .then((response) => {
          const users = response.data;
          const user = users.find(u => u.username === formData.username && u.password === formData.password);
          if (user) {
            setIsLoggedIn(true);
            console.log("Login successful!");
          } else {
            console.log("Invalid user credentials");
          }
        })
        .catch((error) => {
          console.error("Error logging in:", error);
        });
    }
  };
  
  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" name="username" value={formData.username} onChange={handleChange} />
        {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
      </div>
      <div>
        <label>Password:</label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
        {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginForm;
