import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ProjectsList from './projects-list/ProjectsList';
import Highlights from './highlights/Highlights';
import About from './about/About';
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
          <Tabs>
            <TabList className="tabTitle">
              <Tab><h2>Life Events</h2></Tab>
              <Tab><h2>About me</h2></Tab>
            </TabList>
            <TabPanel>
              <Highlights />
            </TabPanel>
            <TabPanel>
              <About />
            </TabPanel>
          </Tabs>
        </div>
      </div>
    );
  }
}

export default App;
