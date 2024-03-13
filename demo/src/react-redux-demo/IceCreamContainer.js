import React from 'react'
import {connect} from 'react-redux'
import { buyIceCream } from './iceCreamActions'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>No of Ice creams: {props.number_of_icecreams}</h2>
        <button onClick={props.buyIcecream}>Buy icecream</button> 
    </div>
  )
}
const mapStatetoProps =(state)=>{
    return{
        number_of_icecreams:state.icecream.number_of_icecreams

    }
}
//defing a fun redux dispatch methid a s a paarm and returns a object
//dispatch of an action creator to the prop in an component
//second additioanl prop :buyCake
const mapDispatchtoProps =(dispatch)=>{
    return{
        buyIcecream:()=>dispatch(buyIceCream())
    }

}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
    )(IceCreamContainer)
