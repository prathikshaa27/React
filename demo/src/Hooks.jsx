import React, { useState, useEffect, useRef, createContext, useContext } from "react";

// Example using useState
 export function Example1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Example using UseState </h1>
      <button onClick={() => setCount(count + 2)}>Click here to see the values get incremented</button>
      <p>Current count is: {count}</p>
    </div>
  );
}

// Example using useEffect
export function HuseEffect() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("Haii");

  useEffect(() => {
    console.log("Component rendered");
    console.log(message);
    console.log("Increased count", count);
  }, [count, message]);

  return (
    <div>
      <h1>Hooks UseEffect</h1>
      <button onClick={() => setCount(count + 1)}>Click here</button>
      <p>The current count is : {count}</p>
      <button onClick={() => setMessage("Hello")}>Click to see the message</button>
      <p>Message : {message}</p>
    </div>
  );
}

// Example using useContext
const UserContext = createContext();

export function Sample() {
  const [user] = useState("prathi");

  return (
    <div>
      <UserContext.Provider value={user}>
        <h1>Sample example using useContext</h1>
        <Component1 />
      </UserContext.Provider>
    </div>
  );
}

function Component1() {
  return (
    <>
      <h2>Component1</h2>
      <Component2 />
    </>
  );
}

function Component2() {
  return (
    <>
      <h2>Component2</h2>
      <Component3 />
    </>
  );
}

function Component3() {
  return (
    <>
      <h2>Component3</h2>
      <Component4 />
    </>
  );
}

function Component4() {
  return (
    <>
      <h2>Component4</h2>
      <Component5 />
    </>
  );
}

function Component5() {
  const user = useContext(UserContext);
  return (
    <>
      <h2>Component5</h2>
      <p>User: {user}</p>
    </>
  );
}

// Example using useRef
export function Sample1() {
  const [message, setMessage] = useState("prathi");
  const input = useRef(null);

  const toHandleSubmit = () => {
    console.log(input.current.type);
  };

  return (
    <div>
      <input ref={input} type="text" placeholder="Enter your name" onChange={(e) => setMessage(e.target.value)} />
      <HuseEffect />
      <br />
      <h1>{message}</h1>
      <br />
      <button onClick={toHandleSubmit}>Submit</button>
    </div>
  );
}
