import React from "react";

const UserComponent =({user})=>{
    return(
        <div>
            <h1>Welcome to our wesbite {user.name}</h1>
            <p>Email:{user.email}</p>
        </div>
    );
}

export default UserComponent;