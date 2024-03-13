import React ,{useState,useEffect}from 'react';
import axios from 'axios';

function PutDataComponent(){
    const[post,setPost]=useState({
        title:' ',
        body:''
    })
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>console.log(response.data))
    },[])

    const handleInput =(event)=>{
        setPost({...post,[event.target.name]:event.target.value})

    }
    const handleSubmit =(event)=>{
        event.preventDefault()
        axios.put('https://jsonplaceholder.typicode.com/posts/1', {post})
        .then(res=>console.log(res.data))
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
                <input type="text" onChange={handleInput} name="body"/>
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
export default PutDataComponent;