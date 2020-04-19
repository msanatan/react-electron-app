import React from 'react';
import logo from './logo.svg';
import './App.css';

const fs = window.require('fs').promises;
fs.readdir('./').
  then((files) => {
    files.forEach(file => {
      console.log(file);
    });
  }).
  catch((error) => {
    console.error(error);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
