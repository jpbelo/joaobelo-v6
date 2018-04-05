import React, { Component } from 'react';
import ProjectsList from './projects-list/ProjectsList';
import Highlights from './highlights/Highlights';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProjectsList />
        <Highlights />
      </div>
    );
  }
}

export default App;
