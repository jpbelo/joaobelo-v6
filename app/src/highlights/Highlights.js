import React, { Component } from 'react';

import './Highlights.css';

const API = 'https://api.joaobelo.pt/highlights';



export default class Highlights extends Component {

  constructor(props) {
    super(props);

    this.state = {
      highlights: [],
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
          highlights: json,
          isLoading: false
        })
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }


  render() {
    const { highlights, isLoading, error } = this.state;

    if (error) {
      return (
        <div className="highlightsList">
          <p>{error.message}</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="highlightsList">
          <p>Loading highlights...</p>
        </div>
      );
    }

    return (
      <div className="highlightsList">
        {highlights.map(highlight =>
          <div key={highlight.id}>
            <h2>{highlight.title}</h2>
            <h3>{highlight.date}</h3>
            <p dangerouslySetInnerHTML={ {__html: highlight.info} }></p>
          </div>
        )}
      </div>
    );
  }

}
