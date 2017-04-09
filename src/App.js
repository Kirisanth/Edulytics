import React, { Component } from 'react';
import { connect } from 'react-redux';
// import logo from './logo.svg';
import './App.css';
import GraphContainer from './container/GraphContainer';
import AssessmentsContainer from './container/AssessmentsContainer';
import CoursesContainer from './container/CoursesContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ display: "inline-block" }}>
          <CoursesContainer style={{backgroundColor: "green"}}/>
        </div>
        <div style={{ display: "inline-block" }}>
          <GraphContainer style={{backgroundColor: "red"}}/>
          <AssessmentsContainer style={{backgroundColor: "blue"}}/>
        </div>
      </div>
    );
  }
}

export default connect()(App);
