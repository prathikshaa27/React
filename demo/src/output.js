
import { Employee } from "./ParentComponent";
import {Skills} from "./Skills"
import {Details} from "./Details"

const Output =()=>{
    return(
        <div>
            <Employee/>
            <Skills/>
            <Details/>
        </div>
    )
}

export {Output}