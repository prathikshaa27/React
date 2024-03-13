import React from "react";
 
function Button({ count, onClick }) {
    return (
      <>
        <button id="button" onClick={onClick}>Clicked {count} times</button>
      </>
    )
  }
 
  export default Button