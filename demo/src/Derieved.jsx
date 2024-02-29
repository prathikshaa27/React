import React from 'react'

export default function Derieved(props) {
  return (
    <div>
        <h1>The props can be passed to the child</h1>
        <p>Child props will be : {props.Username}</p>
    </div>
  )
}
