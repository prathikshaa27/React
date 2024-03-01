import React ,{useState}from 'react';

export default function ChildComponent(props) {
    const[name,setName]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.getState(name);
       

    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <br></br>
            <br></br>
            <button>Submit</button>
        </form>

    </div>
  )
}


