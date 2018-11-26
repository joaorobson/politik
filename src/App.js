import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './homepage'
import About from './about'
import { BrowserRouter as Router, Route} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomepageLayout} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
