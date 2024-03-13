import React from 'react';

function ChildComponent(props) {
  const{name,age}=props;
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Age:{age}</h1>

    </div>
  );
}

export default ChildComponent;

