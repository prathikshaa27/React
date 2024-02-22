import React from 'react';
function Objs(){
   const details= [
   {id:1, Name:"Prathi",Age:22},
   {id:2, Name:"Mike", Age:15}
   ];
return(
    <div>
        <h1>List of details</h1>
        <ul>
        {details.map((users) => (
        <li key={users.id}>
            {users.Name}
            </li>
        
       ) )}
       </ul>
    </div>
)
    }
export {Objs}
