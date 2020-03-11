import React, { Component } from 'react'
import styled from 'styled-components'

import iconEmail from './img/icon-email.svg'
import iconGithub from './img/icon-github.svg'
import iconBit from './img/icon-bit.svg'
import iconLinkedin from './img/icon-linkedin.svg'
import iconTwitter from './img/icon-twitter.svg'

const Container = styled.div`
  p {
    margin-bottom: 20px;
    line-height: 1.4;
  }
  .social {
    margin-top: 40px;

    a {
      margin-top: 20px;
      display: block;
      vertical-align: middle;
      transition: opacity 0.2s ease-in-out;
      font-size: 13px;
      &:hover {
        opacity: 0.5;
      }
      img {
        width: 20px;
        vertical-align: middle;
        margin-right: 10px;
      }
    }
  }
`

export default class About extends Component {
  render() {
    return (
      <Container>
        <p>Hi, I’m João and I’m a Software Developer.</p>
        <p>
          From early on, I had a special interest and curiosity about tech, that
          motivated me to figure how things work on my own. My academic
          background is on graphic design and multimedia, so front-end was
          always apealing to me.
        </p>
        <p>
          As both developer and designer, my passion is for making good looking
          interfaces, that not only work, but feel good to use.
        </p>
        <p>
          At the moment, I'm working full-time as Tech Lead at{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://hashdash.com"
          >
            HashDash
          </a>
          , building an exciting new service.
        </p>
        <p>
          Before that I worked at{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://mindera.com"
          >
            Mindera
          </a>
          , using technology to build great products for clients like{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://net-a-porter.com"
          >
            Net-a-Porter
          </a>{' '}
          and{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://waitrose.com"
          >
            Waitrose
          </a>
          .
        </p>
        <p>
          Over the last years I've worked with some amazing people like{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://manoamanoclub.com"
          >
            Mano a Mano
          </a>
          ,{' '}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.proto.pt"
          >
            Proto
          </a>{' '}
          and{' '}
          <a rel="noopener noreferrer" target="_blank" href="http://www.327.pt">
            327
          </a>
          .
        </p>
        <p>
          For the first time in years, I'm not working on any side projects so I
          can keep my focus in my current position, but whenever I can, I enjoy
          contributing to open source projects.
        </p>
        <div className="social">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="mailto:joaobelo.dev@gmail.com"
          >
            <img src={iconEmail} alt="Email" /> joaobelo.dev@gmail.com
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/jpbelo"
          >
            <img src={iconGithub} alt="Github" /> /jpbelo
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.dev/joaobelo"
          >
            <img src={iconBit} alt="Bit" /> /joaobelo
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joaobelo"
          >
            <img src={iconLinkedin} alt="Linkedin" /> /joaobelo
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/jpasbelo"
          >
            <img src={iconTwitter} alt="Twitter" /> @jpasbelo
          </a>
        </div>
      </Container>
    )
  }
}
