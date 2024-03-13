import React,{useState,useCallback} from 'react';

const Message =()=>{
    const[message, setMessage] =useState("Prathi");

    const updateMessage = useCallback(()=>{
        setMessage("Mike");
    },[]);
    
    return(
        <div>
            <h1>{message}, haii</h1>
            <button onClick = {updateMessage}>Updated message</button>
        </div>
    );
}

export default Message;