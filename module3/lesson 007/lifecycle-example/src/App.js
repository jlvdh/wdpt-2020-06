import React, { Component } from 'react'

function someState() {
  console.log('constructor phase')
  return 'some value';
}
export default class App extends Component {

  state = {
    count: 0,
    someState: someState(),
    // apiService: new apiService('http://kanye.rest')
  }

  incrementCounter = () => {
    this.setState({count: this.state.count + 1})
  }

  componentDidMount() {
    this.state.apiService.get()
    console.log('component did mount')
  }

  componentDidUpdate(prevPros, prevState) {
    console.log(`prevState: ${prevState.count}`)
  }

  render() {
    console.log('App.js -Render')
    return (
      <div>
        {this.state.count} <button onClick={this.incrementCounter}>increment</button>
      </div>
    )
  }
}

