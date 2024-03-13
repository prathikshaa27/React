import React ,{useState}from 'react'

export default function ControlledComponent() {
    const[name,setName]=useState("")
    function toSubmit(e){
        alert(`Name is : ${name}`)
    }
    function handleNameChange(e) {
      setName(e.target.value);
    }
  
  return (

    <div>
        <h1>Example fo Controlled component</h1>
        <form onSubmit={toSubmit}>
        <label>
                Name :
                <input type= "text" name="name" value={name} onChange={handleNameChange}/>
            </label>
            
                <br></br>
                <br></br>
                <button>Submit</button>
           
        </form>
    </div>
  )
}
