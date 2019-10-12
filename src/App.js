import React, { Component } from 'react';
import './App.css';
import HomepageLayout from './homepage'
import About from './about'
import MyWordCloud from './wordcloud'
import Chart from './correlation'
import Projects from './projects'
import Bio from './bio'
import { BrowserRouter as Router, Route} from "react-router-dom";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-129776879-1');
ReactGA.pageview(window.location.pathname + window.location.search);



class App extends Component {
  componentDidMount(){
    document.title = "Politik"
  }
  render() {
    return (
      <Router>
        <div>
          <link href="https://fonts.googleapis.com/css?family=Lato:100,200,300,900" rel="stylesheet" />
          <Route exact path="/" component={HomepageLayout} />
          <Route exact path="/about" component={About} />
          <Route exact path="/bio" component={Bio} />
          <Route exact path="/wordcloud" component={MyWordCloud} />
          <Route exact path="/chart" component={Chart} />
          <Route exact path="/projects" component={Projects} />
        </div>
      </Router>
    );
  }
}

export default App;
