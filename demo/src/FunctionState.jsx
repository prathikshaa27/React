import React , {useState, useEffect} from "react";
import {User} from "./FunctionProps";

const Counter =()=> {
    const[count,setCount]=useState(0);
    return(
        <div>

            <h1>State using Hooks</h1>
            <p>Clicking the button {count} items</p>
            <button onClick={()=>setCount(count+1)}>Click Here!
            </button>
            <User name="Prathi"/>
            </div>

    );;
}
export {Counter}
//use effect

const Counter1 =()=> {
    const[count,setCount]=useState(0);
    useEffect(()=>{
        document.title = "Clicking the button {count} times"
    });
    return(
        <div>
            <h1>State using Hooks</h1>
            <p>Clicking the button {count} items</p>
            <button onClick={()=>setCount(count+1)}>Click Here!
            </button>
            </div>

    );;
}
export {Counter1}