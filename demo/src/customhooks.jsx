import { useState } from 'react';

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange: handleChange,
  };
}

function MyForm() {
  const usernameInput = useFormInput('');
  const passwordInput = useFormInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', usernameInput.value);
    console.log('Password:', passwordInput.value);
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" {...usernameInput} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" {...passwordInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
