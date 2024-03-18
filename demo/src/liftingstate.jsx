import React ,{useState}from "react";

const Lower=({count,onIncreament})=>{
  return(
    <div>
      <h1>Child</h1>
      <p>Count:{count}</p>
      <button onClick={onIncreament}>Increament</button>
    </div>
  );

};

const Upper=()=>{
  const[count,setCount]=useState("0");
  const handleIncreament=()=>{
    setCount(count+1);
  }
  return(
    <div>
      <h2>Parent component</h2>
      <Lower count={count} onIncreament={handleIncreament}/>
    </div>
  );
};
export default Upper;