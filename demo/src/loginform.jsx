import React, { useState, useRef } from 'react';
import formFields from './formFields'; 

const LoginForm = () => {
  const [formData, setFormData] = useState({});

  const emailRef = useRef();
  const fileRef = useRef();

  const handleChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log('Form Data:', formData);
    console.log('Email:', emailRef.current.value);
    console.log('File:', fileRef.current.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1>LoginForm</h1>
        {formFields.map((field) => (
          <div key={field.label}>
            <label>
              {field.label}:
              {field.type !== 'file' ? (
                <input
                  type={field.type}
                  value={formData[field.state] || ''}
                  onChange={(e) => handleChange(field.state, e.target.value)}
                />
              ) : (
                <input type="file" ref={fileRef} />
              )}
            </label>
            <br />
            <br />
          </div>
        ))}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
