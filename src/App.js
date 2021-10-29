import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  
  function fetchData() {
    return axios.get("https://api.agify.io/?name=joseph")
      .then((response) => console.log(response.data));
  }

  let things = fetchData();

  console.log(things)
  
  //var obj = JSON.parse(things);
  
  //console.log(obj.name)

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
