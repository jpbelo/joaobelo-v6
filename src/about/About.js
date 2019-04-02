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
        <p>Hi, I’m João and I’m a FE Developer based in Porto, Portugal.</p>
        <p>From early on, I had a special interest and curiosity about tech, that motivated me to learn some stuff on my own. My academic background is on graphic design and multimedia, so front-end was always apealing to me.</p>
        <p>As both developer and designer, my passion is for making good looking interfaces, that not only work, but feel good to use.</p>
        <p>ATM, I’m working full-time at <a rel="noopener noreferrer" target="_blank" href="http://mindera.com">Mindera</a>, using technology to build great products for clients like <a rel="noopener noreferrer" target="_blank" href="https://net-a-porter.com">Net-a-Porter</a> and <a rel="noopener noreferrer" target="_blank" href="https://waitrose.com">Waitrose</a>.</p>
        <p>From time to time, I still make cool stuff with other people, like <a rel="noopener noreferrer" target="_blank" href="http://www.327.pt">327</a>, <a rel="noopener noreferrer" target="_blank" href="http://www.proto.pt">Proto</a> and <a rel="noopener noreferrer" target="_blank" href="http://manoamanoclub.com">Mano a Mano</a>.</p>
        <p>I’m always looking for new and cool stuff to get my hands on, so if you have a great idea for a project, send me an email. I’ll be happy to give you some feedback and work together to create something awsome.</p>
        <div className="social">
          <a rel="noopener noreferrer" target="_blank" href="mailto:joaobelo.dev@gmail.com"><img src={iconEmail} alt="Email" /> joaobelo.dev@gmail.com</a>
          <a rel="noopener noreferrer" target="_blank" href="https://github.com/jpbelo"><img src={iconGithub} alt="Github" /> /jpbelo</a>
          <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/joaobelo"><img src={iconLinkedin} alt="Linkedin" /> /joaobelo</a>
          <a rel="noopener noreferrer" target="_blank" href="https://twitter.com/jpasbelo"><img src={iconTwitter} alt="Twitter" /> @jpasbelo</a>
        </div>
      </div>
    );
  }
}
