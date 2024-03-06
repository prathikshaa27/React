import React,{useState,useMemo} from 'react';

function Result(){
    const[number,setNumber] = useState("");

    const doubledNumbers=useMemo(()=>{
        console.log("Calculating doubled numbers");
        return number*2;

    },[number]);

    function toHandleNumberChange(event){
        setNumber(parseInt(event.target.value));
    };

    return(
        <div>
            <input type="number" value={number} onChange={toHandleNumberChange}/>
            <h1>Doubled number will be : {doubledNumbers}</h1>
        </div>
    );
}
export default Result;