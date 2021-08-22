import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Components/NavMenu/NavBar';
import NoPath from './Components/Error/NoPath';
import Home from './Components/Pages/Home';
import CSS from './Components/Pages/CSS';
import Blog from './Components/Pages/Blog';
import ContactUs from './Components/Pages/ContactUs';
import CSharp from './Components/Pages/CSharp';
import JavaScript from './Components/Pages/JavaScript';
import Json from "./Components/Pages/Json";
import About from "./Components/Pages/About";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/css" component={CSS} />
          {/* <Route path="/blog" component={Blog} /> */}
          <Route path="/contact" component={ContactUs} />
          <Route path="/csharp" component={CSharp} />
          <Route path="/javascript" component={JavaScript} />
          {/* <Route path="/about" component={About} /> */}
          <Route component={NoPath} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
