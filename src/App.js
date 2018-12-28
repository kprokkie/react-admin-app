import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import CoursesPage from './components/courses/CoursesPage';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/courses" component={CoursesPage} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
