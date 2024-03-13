import React, { useState, useEffect, useRef, useContext } from 'react';

const AuthContext = React.createContext();

const InputComponent = () => {
const [count, setCount] = useState(0);
const prevCountRef = useRef();
const authStatus = useContext(AuthContext);

useEffect(() => {
document.title = `Count: ${count}`;
prevCountRef.current = count; 
}, [count]);

const prevCount = prevCountRef.current;

return (
<div>
<p>Current Count: {count}</p>
<p>Previous Count: {prevCount}</p>
<p>User Authenticated: {authStatus ? 'No' : 'Yes'}</p>
<button onClick={() => setCount(count + 1)}>Increment</button>
<button onClick={() => setCount(count - 1)}>Decrement</button>
</div>
);
};

export default InputComponent;
