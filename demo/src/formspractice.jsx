import React, {useRef} from "react";

export default function FormPractice(){
    const input = useRef("");

    function toHandleSubmit(){
        console.log(`Name is :${input}`)
    }


return(
    <div>
        <h1>Form practice</h1>
        <form onSubmit="{toHandleSubmit}">
            <label>
                Name:
                <input ref={input} type ="text" name ="Name"/>
            </label>
        </form>

    </div>
)
}