import React from 'react'
import { connect } from 'react-redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Item -{props.item}</h2>
    </div>
  )
}

const mapStatetoProps =(state,ownProps)=>{
    const itemState=ownProps.cake?state.cake.number_of_cakes:
     (state.iceCream ? state.iceCream.number_of_iceCreams : 0);
    return{
        item:itemState
    }
}

export default connect(mapStatetoProps) (ItemContainer)
