import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react'

function App() {
  
  const [things, setThings] = useState(null);
  
  let name = null;

  function fetchData() {
    axios.get("https://api.agify.io/?name=joseph").then((response) =>    setThings(response.data));
  }

  useEffect(() => {
    fetchData();
  },[])

  console.log("11" + things)
   
  if (things) {
    console.log(things.name)
    name = things.name
  }
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
        {name}
      </header>
    </div>
  );
}

export default App;
