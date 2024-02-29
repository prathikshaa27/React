import React ,{useState}from 'react'

export default function ControlledComponent() {
    const[name,Setname]=useState("")
    function toSubmit(e){
        alert(`Name is : ${name}`)
    }
  return (

    <div>
        <h1>Example fo Controlled component</h1>
        <form onSubmit={toSubmit}>
        <label>
                Name :
                <input type= "text" name="name" onClick={(e)=>Setname(e.target.value)}/>
            </label>
            
                <br></br>
                <br></br>
                <button>Submit</button>
           
        </form>
    </div>
  )
}
