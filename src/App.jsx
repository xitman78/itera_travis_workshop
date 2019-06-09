import React from 'react';
import logo from './TravisCI.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br /><br />
        <p>
          Welcome to the workshop!
        </p>
        <a
          className="App-link"
          href="https://docs.travis-ci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Travis CI
        </a>
      </header>
    </div>
  );
}

export default App;
