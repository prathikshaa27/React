import React, {useEffect}from 'react';
import axios from 'axios';

function DeleteRequest(){
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(response=>console.log(response.data))
    })
    function deleteRecord(){
        axios.delete('https://jsonplaceholder.typicode.com/posts/1')
        .then(()=>{
            alert("Data had been deleted")
        })
    }
return(
    <div>
        <button onClick={deleteRecord}>Delete</button>
    </div>
);
}
export default DeleteRequest;