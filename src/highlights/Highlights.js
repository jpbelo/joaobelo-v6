import React, { Component } from 'react';

import './Highlights.css';

import { highlights } from './data';

export default class Highlights extends Component {
  render() {
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
