import React from 'react'
import {useSelector,useDispatch } from 'react-redux'
import { buyCake } from './cakeActions'


function HooksCakeContainer() {

    const number_of_cakes =useSelector(state=>state.cake.number_of_cakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>No of Cakes - {number_of_cakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer