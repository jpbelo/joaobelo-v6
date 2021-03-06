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
          I've always had a special interest and curiosity about tech that
          motivated me to figure how things work on my own. As a passionate
          software developer I enjoy creating great digital experiences. My
          background in communication design and product comes in hand when
          translating an idea into paper and then bringing it to life.
        </p>
        <p>
          At the moment, I'm working full-time as VP of Engineering at{' '}
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
          For the first time in years, I'm not working on any side projects so I
          can keep my focus in the current project, but whenever I can, I still
          enjoy contributing to open source projects.
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
            <img src={iconGithub} alt="Github" /> jpbelo
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://bit.dev/joaobelo"
          >
            <img src={iconBit} alt="Bit" /> joaobelo
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/joaobelo"
          >
            <img src={iconLinkedin} alt="Linkedin" /> joaobelo
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
