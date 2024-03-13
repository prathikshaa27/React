import React ,{useState}from "react";

function Example1(){
    const[count, setCount] = useState(0);

    return(
        <div> 
            <h1>Example using UseState </h1>
            <button onClick ={()=>setCount(count+2)}>Click here to see the values get increamented</button>
            <p>Current count is: {count}</p>
        </div>
    );
}
export default Example1;

