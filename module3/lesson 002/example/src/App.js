import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comp from './Comp';

const teachers = ['Jorg', 'Guido']

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> Hello Ironhack. your teachers are: 
          
          {`${teachers[0]} and ${teachers[1]}`}
        </p>
        <i>{12 * 7}</i>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Comp test="hello" />
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
