import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';


export default class App extends Component {
  state = {
    surname: '',
    age: '',
    gender: [],
    likeReact: false
  }

  changeSurname = (e) => {
    this.setState({surname: e.target.value})
  }

  changeAge= (e) => {
    this.setState({age: e.target.value})
  }

  changeHandler = (e) => {
    let { name, value, type } = e.target
    if(type === 'checkbox') {
      value = e.target.checked
    }
    this.setState({[name]: value})
  }

  submitHandler = (e) => {
    e.preventDefault()
    alert(`hello ${this.state.surname}`)
  }

  changeHandlerM = (e) => {
    const {name, options} = e.target;
    console.log(options)

    const newValues = []
    for(let i = 0; i <options.length; i++) {
      if(options[i].selected) {
        newValues.push(options[i].value)
      }
    }
    this.setState({[name]: newValues})
  }

  render() {
    return (
      <div className="App">
      <h1>FORM</h1>
      <form onSubmit={(e) => this.submitHandler(e)}>
        <label htmlFor="surname">surname</label>
        <input 
          type="text" 
          name="surname" 
          id="surname" 
          value={this.state.surname} 
          onChange={this.changeHandler}/>
          <input type="submit" value="submit"/>
          <label htmlFor="age">age</label>
        <input 
          type="text" 
          name="age" 
          id="age" 
          value={this.state.age} 
          onChange={this.changeHandler}/>
          <input type="submit" value="submit"/>
      <select 
        name="gender" 
        id="gender" 
        value={this.state.gender}
        onChange={this.changeHandlerM}
        multiple
        >
        <option value="male">male</option>
        <option value="female">female</option>
        <option value="fluid">fluid</option>
      </select>
      <label htmlFor="like-react"></label>
      <input 
        type="checkbox" 
        name="likeReact" 
        id="like-react" 
        value={this.state.likeReact} 
        onChange={this.changeHandler}/>
        <div onChange={this.changeHandler}>
          <input type="radio" name="color" id="" value="red"/>
          <input type="radio" name="color" id="" value="green"/>
          <input type="radio" name="color" id="" value="blue"/>
        </div>

      </form>
      <div>
        name: {this.state.surname}
      </div>
    </div>
    )
  }
}