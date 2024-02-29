import React from "react";
import Skills from "./Skills";

const Employee =(props)=>{
    return(
        <div>
            <h1>Parent to Child communication</h1>
            <p>Hello {props.name}</p>
            <p>My Employee ID is {props.empid}</p>
            <Skills userName={props.name} empskill="Full-stack developer"/>
        </div>
        

    );
}
export {Employee}
