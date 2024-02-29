import React from "react";


export default function Skills(props){
    return(
        <div>
            <h1>The property had been taken from the child component</h1>
            <h1> Skills:{props.empskill}{props.userName}</h1>
        </div>
    );
}

