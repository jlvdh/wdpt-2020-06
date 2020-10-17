import React from 'react';
import './App.css';
import FastFoodLover from './components/FastFoodLover/FastFoodLover';
import ReactPlayer from 'react-player'

const url ='https://www.youtube.com/watch?v=CLOUITxPv6A'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>fastfood lovers</h3>
          <div>
            <FastFoodLover name="Lisette" age={6} />
            <FastFoodLover name="Anna" />
            <FastFoodLover name="Yuka" />
          </div>
        </div>
        <ReactPlayer url={url} />
      </header>
    </div>
  );
}

export default App;
