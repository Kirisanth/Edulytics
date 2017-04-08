import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Graph from './container/Graph';
import Assessments from './container/Assessments';
import Courses from './container/Courses';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Graph style={{backgroundColor: "red"}}/>
        <Assessments style={{backgroundColor: "blue"}}/>
        <Courses style={{backgroundColor: "green"}}/>
      </div>
    );
  }
}

export default App;
