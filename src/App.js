import logo from './logo.svg';
//import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  const  title="Welcome to my blog";
  const likes =50;
  const link="http://www.google.com";
  //const person={name: "yoshi", age:30};
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className= "Content">
          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>
            <Route path="/create">
              <Create/>
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails/>
            </Route>
          </Switch>
      </div>
      </div>
    </Router>
  );
}

export default App;
