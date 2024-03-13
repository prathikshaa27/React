import React from 'react';

const List = ()=>{
    let items = ["Apple", "Mango"," Orange"];
    return(
        <div>
            <h1>List of fruits</h1>
            <ul>
                {items.map((item,index) =>(
                    <li key= {index}>
                        {item}
                        </li>
                ))}
            </ul>
        </div>

    )
}
export {List};