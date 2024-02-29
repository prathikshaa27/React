import React, {useState, useEffect} from "react";

function HuseEffect(){
    const[count, setCount]= useState(0);
    const[message, setMessage] = useState("Haii")

    useEffect(() =>{
        console.log("Component rendered");
        console.log(message);
        console.log("Increased count" ,count)
    },[count,message]);
    return(
        <div>
            <h1>Hooks UseEffect</h1>
            <button onClick = {()=>(setCount(count+1))}>Click here</button>
            <p>The current count is : {count}</p>
            <button onClick = {() => (setMessage("Hello"))}>Click to see the message</button>
            <p>Message : {message}</p>
 
        </div>
    );
   
}
export default HuseEffect;