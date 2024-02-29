import React from "react";

function User(props){
    return(
        <>
         {props.name && <h1>My Name is : {props.name}</h1>}
    
        {props.age && <h1>My age is : {props.age}</h1>}
        </>
    );

}
export {User};