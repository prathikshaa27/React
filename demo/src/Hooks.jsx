import React, { useState, useEffect } from 'react';

function Task() {
  
  const [count, setCount] = useState(0);

 
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); 

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export {Task}