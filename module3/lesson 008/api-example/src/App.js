import React, { Component } from 'react'
// import axios from 'axios';

const KANYE_REST = 'https://api.kanye.rest'
const COUNTRIES = 'https://countries.tech-savvy.tech/countries'
export default class App extends Component {

  state = {
  }

  componentDidMount() {
    // console.log('component did mount')
    // axios.get(KANYE_REST)
    //   .then(response => {
    //     console.log(response)
    //   })

    fetch(COUNTRIES)
      .then(res => {
        return res.json()
      })
      .then(data => {
        this.setState({countries: data})
        // console.log(data)
      })
  }

  // getQuote = () => {
  //   fetch(KANYE_REST)
  //   .then(res => {
  //     return res.json()
  //   })
  //   .then(data => {
  //     this.setState({quote: data.quote})
  //     // console.log(data)
  //   })

  // }
  render() {
    console.log('render')

  if(!this.state.countries || this.state.countries.length < 1) {
    return <h1>loading</h1>
  }

    return (
      <>
        <div>
          {this.state.countries[0].name.common}
        </div>
        {/* <button onClick={this.getQuote}>What does kanye think about it?</button> */}
      </>
    )
  }
}

