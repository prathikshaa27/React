import React from "react";
function Example(){
const user ={
    Name : 'Prathi',
    Age : 22,
    Gender: "Female",
    Image : "https://hips.hearstapps.com/hmg-prod/images/types-of-garden-flowers-purple-allium-1674847068.jpeg",
   
    
};
    return(
        <div>
        <h1>Name: {user.Name}</h1>
        <p>Age: {user.Age}</p>  
        
        <img
        src= {user.Image}
        alt = {"user photo"}
        style={{
            width:600,
            height:700
            
        }}
        />
        </div>
        

        
    );
    

}
export {Example};