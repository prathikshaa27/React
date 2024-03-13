import React,{useState} from 'react'
import {connect} from 'react-redux'
import { buyCake } from './cakeActions'

function NewCakeContainer(props) {
    const[number,setNumber]=useState(1)
  return (
    <div>
        <h2>No of cakes: {props.number_of_cakes}</h2>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)}/>
        <button onClick={()=>props.buyCake(number)}>Buy {number} cake</button> 
    </div>
  )
}
const mapStatetoProps =(state)=>{
    return{
        number_of_cakes:state.cake.number_of_cakes

    }
}
const mapDispatchtoProps =(dispatch)=>{
    return{
        buyCake:number=>dispatch(buyCake(number))
    }

}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
    )(NewCakeContainer)
