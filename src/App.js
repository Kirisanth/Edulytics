import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Graph from './container/Graph';
import Assessments from './container/Assessments';
import Courses from './container/Courses';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ display: "inline-block" }}>
          <Courses style={{backgroundColor: "green"}}/>
        </div>
        <div style={{ display: "inline-block" }}>
          <Graph style={{backgroundColor: "red"}}/>
          <Assessments style={{backgroundColor: "blue"}}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
