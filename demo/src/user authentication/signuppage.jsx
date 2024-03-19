import React, { useState } from "react";
import axios from "axios";
import LoginForm from "./loginform";

const SignUpPage = ({ setIsLoggedIn }) => {
  const api = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com/users`
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

  const handleSignUp = () => {
    if (validateForm()) {
    
      api.post("https://dummyjson.com/auth/login", formData)
        .then(() => {
          console.log("Sign-up successful!");
          setIsLoggedIn(true); 
        })
        .catch((error) => {
          console.error("Error signing up:", error);
        });
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
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
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
