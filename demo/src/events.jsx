import React from "react";
const Event = ()=>{
    alert("You have clicked the button")
 
 return(
    <div>
        <h1>Sample Event using react</h1>
        <button onClick={Event}>Click me</button>
    </div>

 );
}
 export {Event};

 const Event1 =(a)=>{
    alert("CLicked the button again")
    return(
        <div>
        <h2>Event with arguments</h2>
        <button onClick={()=>Event1("Hello")}>Click me again</button>
        </div>
    )
 }
 export{Event1};

 function Event2(){
    const handleClick = (event)=>{
        console.log("You have clicked the button",event);
    };
    return(
        <div>
            <h1>React Event Objects</h1>
            <button onClick={handleClick}>CLICK HERE</button>
        </div>
    );
 }
 export {Event2};