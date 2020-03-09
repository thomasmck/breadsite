import React from 'react';
import './App.css';
import Blogs from './Blogs';
import Stats from './Stats';
import Header from './header';
import About from './about';
import BlogsPage from './BlogsPage'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Page() {
  return (
    <Router>
      <Header/>
      <div>
        <Switch>
          <Route exact path="/">
            <App />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blogs">
            <BlogsPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Intro() {
  return(
    <div className="Banner-content">
      <h1>Welcome to the Breadsite</h1>
      <p className="Banner-content-para">This website is a marriage between bread baking and technology, including informative blogs and stat tracking</p>
      <p className="Banner-content-para">For more information on my proofing automation setup, see ~insert link here~</p>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <div className="Banner">
      <Intro/>
      </div>
      <div className="Body">
        <Stats/>
        <Blogs/>
      </div>
      <footer className="App-footer">
        <p>Thanks for visiting</p>
      </footer>
    </div>
  );
}

/* export default App; */
