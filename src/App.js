import React, { Component, Fragment } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import styled, { ThemeProvider } from 'styled-components'

import theme from 'theme'
import ProjectsList from 'containers/ProjectsList'
import Experience from 'containers/Experience'
import About from 'containers/About'

const LeftPanel = styled.div`
  padding: 0 40px;
  display: inline-block;
  vertical-align: top;
  width: 40%;
`

const LeftPanelContent = styled.div`
  padding-top: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
`

const RightPanel = styled.div`
  padding: 0 40px;
  display: inline-block;
  vertical-align: top;
  width: 60%;
  @media (max-width: 699px) {
    width: 100%;
  }
`

const RightPanelContent = styled.div`
  padding-top: 20px;
  height: calc(100vh - 100px);
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  @media (max-width: 699px) {
    height: calc(100vh - 200px);
  }
`

const StyledTabList = styled(TabList)`
  display: flex;
  & > li {
    flex: 1 1 0;
    cursor: pointer;
    & > a {
      transition: color 0.2s ease-in-out;
    }
    &:hover > a {
      color: grey;
    }
    &[aria-selected='true'] {
      border-bottom: 1px solid black;
      & > a {
        color: grey;
      }
    }
  }
`

const Title = styled.a`
  line-height: 80px;
  font-size: 18px;
  font-family: 'Crimson Text', serif;
  font-weight: 400;
`

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
              <LeftPanel>
                <Title>My Work.</Title>
                <LeftPanelContent>
                  <ProjectsList />
                </LeftPanelContent>
              </LeftPanel>
            )}
            <RightPanel>
              <Tabs defaultIndex={0}>
                <StyledTabList>
                  {this.state.isMobile && (
                    <Tab>
                      <Title>Projects.</Title>
                    </Tab>
                  )}
                  <Tab>
                    <Title>About.</Title>
                  </Tab>
                  <Tab>
                    <Title>Work experience.</Title>
                  </Tab>
                </StyledTabList>
                <RightPanelContent>
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
                </RightPanelContent>
              </Tabs>
            </RightPanel>
          </Fragment>
        </ThemeProvider>
      </div>
    )
  }
}

export default App
