import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <iframe className='iframe-s' width="560" height="315" src="https://www.youtube.com/embed/ExrqPf1dKPg?si=5hKa4Zr7cZCoTewY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn coke making
        </a>
      </header>
    </div>
  );
}

export default App;
