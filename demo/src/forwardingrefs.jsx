import React, { useRef, useEffect } from 'react';


const ChildComponent = React.forwardRef((ref) => {
  return <input ref={ref} />;
});

const ParentComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  },);
  console.log(inputRef.current)

  return (
    <div>
      <h2>This is a Parent Component</h2>
      <ChildComponent ref={inputRef} />
    </div>
  );
};

export default ParentComponent;