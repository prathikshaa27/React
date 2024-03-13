import React from 'react';
function Greeting({LoggedIn}){

    if(LoggedIn){
        return <h1>Welcome Back!</h1>
    }
        else{
            return <h1>Please Login</h1>
        }
    }
export {Greeting} ; 
