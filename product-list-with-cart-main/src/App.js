import logo from './logo.svg';
import './App.css';
import './dessert.js';
import Dessert from './dessert.js';

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

export default Dessert;

/* 
Important links 
https://react-bootstrap.netlify.app/docs/getting-started/introduction
https://react.dev/learn/start-a-new-react-project 
*/