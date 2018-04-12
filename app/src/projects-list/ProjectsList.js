import React, { Component } from 'react';

import './ProjectsList.css';

const API = 'https://api.joaobelo.pt/projects';



export default class ProjectsList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      projects: [],
      isLoading: false,
      error: null,
    };
  }


  componentDidMount() {
    this.setState({ isLoading: true });

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then( (json) => {
        this.setState({
          projects: json,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    const { projects, isLoading, error } = this.state;

    if (error) {
      return (
        <div className="projectsList">
          <p>{error.message}</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="projectsList">
          <p>Loading projects ...</p>
        </div>
      );
    }

    return (
      <div className="projectsList">
        {projects.map(project =>
          <div key={project.id}>
            <h2>{project.name} <span>{project.type}</span></h2>
            <p dangerouslySetInnerHTML={ {__html: project.description} }></p>
            <span>{project.tools}</span>
            <a target="_blank" href={project.external_url}>— project link</a>
          </div>
        )}
      </div>
    );
  }

}
