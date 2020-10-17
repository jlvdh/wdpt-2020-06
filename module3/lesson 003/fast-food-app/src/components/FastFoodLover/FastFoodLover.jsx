import React from 'react'
import './FastFoodLover.css'

const FastFoodLover = (props) => {
return (
  <div className="card">
    <li>name: <i>{props.name}</i> </li>
    <li>age: {props.age}</li>
  </div>
  )
}

export default FastFoodLover