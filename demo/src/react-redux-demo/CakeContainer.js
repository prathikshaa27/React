import React from 'react'
import {connect} from 'react-redux'
import { buyCake } from './cakeActions'

function CakeContainer(props) {
  return (
    <div>
        <h2>No of cakes: {props.number_of_cakes}</h2>
        <button onClick={props.buyCake}>cake</button> 
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
        buyCake:()=>dispatch(buyCake())
    }

}
export default connect(
    mapStatetoProps,
    mapDispatchtoProps
    )(CakeContainer)
