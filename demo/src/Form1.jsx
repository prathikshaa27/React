import React, { useState } from 'react';

const Form1 = () => {
  const [controlledInputValue, setControlledInputValue] = useState('');
  const uncontrolledInputRef = React.useRef(null);

  const handleControlledInputChange = (event) => {
    setControlledInputValue(event.target.value);
  };

  const handleUncontrolledButtonClick = () => {
    alert(`Uncontrolled input value: ${uncontrolledInputRef.current.value}`);
  };

  return (
    <div>
   
      <label>
        Controlled Input:
        <input
          type="text"
          value={controlledInputValue}
          onChange={handleControlledInputChange}
        />
      </label>
      <p>Controlled Input Value: {controlledInputValue}</p>

    
      <label>
        Uncontrolled Input:
        <input type="text" ref={uncontrolledInputRef} />
      </label>
      <button onClick={handleUncontrolledButtonClick}> Uncontrolled Input Value</button>
    </div>
  );
};

export default Form1;