import React , {createContext, useContext,useState}from "react";

// creating the context
const UserContext = createContext()
export default function Sample(){
    const[user] = useState("prathi");
    return(
        <div>
        <UserContext.Provider value = {user}>
        <h1>Sample example using useContext</h1>
        <Component1/>
        </UserContext.Provider>

        </div>
    );
}
function Component1(){
    return(
        <>
        <h2>Component1</h2>
        <Component2/>
        </>

    );
}
function Component2(){
    return(
        <>
        <h2>Component2</h2>
        <Component3/>
        </>

    );
}
function Component3(){
    return(
        <>
        <h2>Component3</h2>
        <Component4/>
        </>

    );
}
function Component4(){
    return(
        <>
        <h2>Component4</h2>
        <Component5/>
        </>

    );
}

function Component5(){
    const user = useContext(UserContext)
    return(
        <>
        <h2>Component5</h2>
        <p>User: {user}</p>
        
        </>

    );
}