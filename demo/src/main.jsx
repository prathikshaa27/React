import React from 'react'
import Derieved from './derieved';

export default function Main(props) {
  return (
    <div>
        <h1>Parent to child communication</h1>
        <p>Name :{props.name}</p>
        <Derieved Username={props.name}/>
    </div>
  );
}
