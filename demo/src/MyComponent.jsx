import React, { useState, useEffect, useRef, useContext } from 'react';

// Create a context
const MyContext = React.createContext();

const MyComponent = () => {
  // useState example
  const [count, setCount] = useState(0);

  // useEffect example
  useEffect(() => {
    // This will run after the component renders
    document.title = `Count: ${count}`;

    // Cleanup function (equivalent to componentWillUnmount in class components)
    return () => {
      document.title = 'React App';
    };
  }, [count]); // Run effect only when count changes

  // useRef example
  const inputRef = useRef(null);

  // useContext example
  const contextValue = useContext(MyContext);

  const handleButtonClick = () => {
    // Update count using useState
    setCount(prevCount => prevCount + 1);

    // Focus on the input using useRef
    inputRef.current.focus();
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleButtonClick}>Increase Count</button>

      <input type="text" ref={inputRef} placeholder="Focus me" />

      <p>Context Value: {contextValue}</p>
    </div>
  );
};

export default MyComponent;
