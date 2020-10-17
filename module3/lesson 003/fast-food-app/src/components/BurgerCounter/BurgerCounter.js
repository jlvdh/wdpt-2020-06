import React, { Component } from 'react'
import FastFoodLover from '../FastFoodLover/FastFoodLover'

export default class BurgerCounter extends Component {

  state = {
    burgerCount: 0
  }

  addBurger = () => {    
    console.log('add burger')
    const newBurgerCount = this.state.burgerCount + 1
    this.setState({burgerCount: newBurgerCount })
  }

  render() {
    return (
      <div>
        we ate {this.state.burgerCount} burgers
        <FastFoodLover name="Jorg" burgers={this.state.burgerCount} />
        {/* {this.state.burgerCount %2 === 0 && 'we ate an even number of burgers'} */}
        <button onClick={this.addBurger}>add burger</button>
      </div>

    )
  }
}