import React, {useReducer} from 'react';

const initialstate={
    count:0
};

function reducer(state,action){
    switch(action.type){
        case "increament":
            return{count:state.count+1}
        case "decreament":
            return{count:state.count-1}
        default:
            return state;
    }
}

function Counter1(){
    const[state,dispatch]= useReducer(reducer,initialstate);
    return(
        <div>
            <h1>Count: {state.count}</h1>
            <button onClick={()=>dispatch({type:'increament'})}>Increament</button>
            <button onClick={()=>dispatch({type:'decreament'})}>Decreament</button>
        </div>
    );
}
export default Counter2;

