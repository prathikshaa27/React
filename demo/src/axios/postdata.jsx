import React,{useState} from 'react';
import axios from 'axios';

function PostDataComponent(){
    const[post,setPost] =useState({
        title:'',
        body:''
    })
const handleInput =(event)=>{
    setPost({...post,[event.target.name]: event.target.value})

}
const handleSubmit =(event)=>{
    event.preventDefault()
    axios.post('https://jsonplaceholder.typicode.com/posts',{post})
    .then(response =>console.log(response))
    .catch(err=>console.log(err))


}
return(
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                title:
            <input type="text" onChange={handleInput} name="title"/>
            </label>
            <br></br>
            <br></br>
            <label>
                body:
                <input type="text" onChange={handleInput} name="post"/>
                <br></br>
                <br></br>
            </label>
            <br>
            </br>
            <br>
            </br>
            <button>Submit</button>
        </form>

    </div>
)
}
export default PostDataComponent;