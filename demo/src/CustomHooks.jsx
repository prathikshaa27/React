import React,{useState} from 'react';

const useToggle=(initialvalue =false)=>{
    const[value, setValue]= useState("initialvalue")

    const toggle =()=>{
        setValue((prevValue) =>!prevValue);
    };
    return[value,toggle];
}

function ToggleComponent(){
    const[isTogled,toggle] = useToggle(false);
    return(
        <div>
            <p>{isToggle?"Tgogle on":"Toggled off"}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
}

export default ToggleComponent;