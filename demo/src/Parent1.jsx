import React, { useState } from 'react'
import Child1 from "./Child1";

export default function Parent1() {
    const[message,Setmessage]=useState("");

    const updateMessageFromChild = (message)=>{
        Setmessage(message);
    
    }
  return (
    <div>
        <h1>Child to parent communication</h1>
        <p>Message : {message}</p>
        <Child1 updateMessage= {updateMessageFromChild}/>
        
    </div>
  );
}
