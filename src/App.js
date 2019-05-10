import React, { Component, Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { ThemeProvider } from 'styled-components'

import theme from './theme'
import ProjectsList from './ProjectsList'
import Experience from './Experience'
import About from './About'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isMobile: false,
    }
  }

  componentDidMount() {
    window.onresize = () => {
      if (window.innerWidth < 700) {
        this.setState({
          isMobile: true,
        })
      } else {
        this.setState({
          isMobile: false,
        })
      }
    }
    window.dispatchEvent(new Event('resize'))
  }

  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Fragment>
            {!this.state.isMobile && (
              <div className="Projects">
                <div className="title">
                  <h1>My Work.</h1>
                </div>
                <ProjectsList />
              </div>
            )}
            <div className="Highlights">
              <Tabs>
                <TabList className="tabTitle">
                  {this.state.isMobile && (
                    <Tab>
                      <h1>Projects.</h1>
                    </Tab>
                  )}
                  <Tab>
                    <h1>About.</h1>
                  </Tab>
                  <Tab>
                    <h1>Events.</h1>
                  </Tab>
                </TabList>
                {this.state.isMobile && (
                  <TabPanel>
                    <ProjectsList />
                  </TabPanel>
                )}
                <TabPanel>
                  <About />
                </TabPanel>
                <TabPanel>
                  <Experience />
                </TabPanel>
              </Tabs>
            </div>
          </Fragment>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
