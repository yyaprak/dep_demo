import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const  title="Welcome to my blog";
  const likes =50;
  const link="http://www.google.com";
  //const person={name: "yoshi", age:30};
  return (
    <div className="App">
      <Navbar/>

      {
      //#region original
      /*
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
      */
      //#endregion
      }
      <div className= "Content">
        <Home/>
        {/*
        <h1>App component</h1>
        <h1>{title}</h1>
        <p>liked {50} times</p>
        */
         //<p>{person}</p>üüüüüüü
        /*
        <p>{Math.random() * 10}</p>
        <a href={link}> Google Site</a>
        */
        }

      </div>
    
    </div>
  );
}

export default App;
