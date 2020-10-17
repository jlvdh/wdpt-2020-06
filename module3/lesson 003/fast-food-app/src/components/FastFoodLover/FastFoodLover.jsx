import React from 'react'
import './FastFoodLover.css'

const FastFoodLover = (props) => {
return (
  <div className="card">
    <li>name: <i>{props.name}</i> </li>
    <li>ate: {props.burgers} burgers</li>
    <img src="img/logo192.png" />
  </div>
  )
}

export default FastFoodLover