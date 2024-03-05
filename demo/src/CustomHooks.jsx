import React,{useState} from 'react';

const useCounter =(initial=0,value=1)=>{
    const[count,setCount]=useState(initial);


const increament =()=>{
    setCount(count+value);
};
const decreament =() =>{
    setCount(count-value);
};
const reset =() =>{
    setCount(initial);
};
return{
    count,
    increament,
    decreament,
    reset

}
}
export default useCounter;