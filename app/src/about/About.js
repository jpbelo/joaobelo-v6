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
        <p>Hi, I'm João!</p>
        <p>I'm a web developer based in Porto, Portugal.</p>
        <p>From early on, I had a special interest and curiosity about tech, that motivated me to learn some stuff on my own. My formal education is on graphic design and multimedia, so front-end always came easy to me.</p>
        <p>As both web developer and designer, my passion is for making good looking web apps, that not only work, but feel good to use.</p>
        <p>At the moment, I'm working at 327 Creative Studio, a design studio based in Porto, where we focus on creating great brands.</p>
        <p>I still make some stuff on my own from time to time, so if you have a great idea for a project, send me an email. I'm always available to give you a feedback and work together to make something awsome.</p>
        <div className="social">
          <a target="_blank" href="mailto:mail@joaobelo.pt"><img src={iconEmail} alt="Email" /> mail@joaobelo.pt</a>
          <a target="_blank" href="https://github.com/jpbelo"><img src={iconGithub} alt="Github" /> /jpbelo</a>
          <a target="_blank" href="https://www.linkedin.com/in/joaobelo"><img src={iconLinkedin} alt="Linkedin" /> /joaobelo</a>
          <a target="_blank" href="https://twitter.com/jpasbelo"><img src={iconTwitter} alt="Twitter" /> @jpasbelo</a>
        </div>
      </div>
    );
  }

}
