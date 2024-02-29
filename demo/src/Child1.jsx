import React from 'react'

export default function Child1(props) {

    const handleClick = ()=>{
        props.updateMessage("hello this is prathi")
    }
  return (
    <div>
        <h1>Passing props from child to parent</h1>
        <button onClick= {handleClick}>Click here</button>


    </div>
  );
}
