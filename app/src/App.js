import React, { Component } from 'react';
import ProjectsList from './projects-list/ProjectsList';
import Highlights from './highlights/Highlights';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Projects">
          <div className="title">
            <h2>Projects</h2>
          </div>
          <ProjectsList />
        </div>
        <div className="Highlights">
          <div className="title">
            <h2>Life Events</h2>
          </div>
          <Highlights />
        </div>
      </div>
    );
  }
}

export default App;
