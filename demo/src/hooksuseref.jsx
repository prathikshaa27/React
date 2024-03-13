import React, {useState,useRef} from "react";
import HuseEffect from "./HooksUseEffect";

export default function Sample1(){
    
    const[message,setMessage] = useState("prathi");
    const input = useRef("null");

    const toHandleSubmit=()=>{
        console.log(input.current.type)

    }
return(
    <div>
        <input ref= {input} type="text" placeholder="Enter your name" onChange={e=>setMessage(e.target.value)}/>
        <HuseEffect/>
        <br></br>
        <h1>{message}</h1>
        <br></br>
        <button onClick={toHandleSubmit}>Submit</button>

    </div>

);
}
export {Sample1};