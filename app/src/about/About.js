import React, { Component } from 'react';

import './About.css';

import iconEmail from './img/icon-email.svg';
import iconGithub from './img/icon-github.svg';
import iconLinkedin from './img/icon-linkedin.svg';
import iconTwitter from './img/icon-twitter.svg';

export default class About extends Component {

  render() {
    return (
      <div className="aboutContent">
        <p>Hi, I’m João and I’m a web developer based in Porto, Portugal.</p>
        <p>From early on, I had a special interest and curiosity about tech, that motivated me to learn some stuff on my own. My academic background is on graphic design and multimedia, so front-end was always apealing to me.</p>
        <p>As both web developer and designer, my passion is for making good looking web applications, that not only work, but feel good to use.</p>
        <p>Right now, I’m working full-time at <a rel="noopener noreferrer" target="_blank" href="http://327.pt">327 Creative Studio</a>, a design studio based in Porto, where we focus on creating great brands.</p>
        <p>I still make some stuff on the side, mainly with <a rel="noopener noreferrer" target="_blank" href="http://www.proto.pt">Proto</a> and <a rel="noopener noreferrer" target="_blank" href="http://manoamanoclub.com">Mano a Mano</a>, other two design studios in Porto.</p>
        <p>I’m always looking for people to collaborate with, so if you have a great idea for a project, send me an email. I’d be happy to give you feedback and work together to create something awsome.</p>
        <div className="social">
          <a rel="noopener noreferrer" target="_blank" href="mailto:mail@joaobelo.pt"><img src={iconEmail} alt="Email" /> mail@joaobelo.pt</a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/jpbelo"><img src={iconGithub} alt="Github" /> /jpbelo</a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joaobelo"><img src={iconLinkedin} alt="Linkedin" /> /joaobelo</a>
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jpasbelo"><img src={iconTwitter} alt="Twitter" /> @jpasbelo</a>
        </div>
      </div>
    );
  }

}
