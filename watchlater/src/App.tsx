import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  // On load, useEffect for state.load()

  return (
    <div className="App">
      <header className="App-header">

        <h1>Watch Later</h1>

        <p>Get started by adding a show or movie you want to watch and give it a tag</p>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
