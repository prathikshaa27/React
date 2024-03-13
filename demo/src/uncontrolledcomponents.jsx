import React,{useRef} from 'react'


export default function UncontrolledComponents() {
    const input = useRef("");

    function toHandleSubmit(){
        alert(`Email is :", ${input.current}`)
    }

  return (
    <div>
        <h1>EXample for uncontrolled components </h1>
        <form onSubmit={toHandleSubmit}>
            <label>
                Email id :
                <input ref={input} type= "text" name="emailid"/>
            </label>
            <br></br>
            <br></br>
            <button>Submit</button>
            
        </form>

    </div>
  );
}

