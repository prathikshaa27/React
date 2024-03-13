import React ,{useState}from 'react';
import ChildComponent from './ChildComponent';

export default function ParentComponent() {
   const name='prathi';
   const age =22;
  return (
    <div>
      <h1>Parent to child communication</h1>
      <ChildComponent name={name} age={age}></ChildComponent>
 
    </div>
  )
}
