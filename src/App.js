import React from 'react';
import ouch from './img/ouch.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={ouch} alt="ouch!" />
        <h1>
          Maxi pollera, te fuiste y nos dejaste solos en pleno free weekend!!!!
        </h1>
        <p>
          Saludos a la jermu jaja
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
