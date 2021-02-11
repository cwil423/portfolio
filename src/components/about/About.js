import React from 'react';
import './About.scss';
import rocket from '../../images/flying-rocket.gif';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function About() {
  return (
    <div className="about-root">
      <div className="rocket">
        <img src={rocket} />
      </div>

      <div className="bio">
        <h1>Hi, my name is Cole Williamson!</h1>
        <h2>I am a self-taught web developer.</h2>
        <p>
          I have experience working with all levels of javascript full stack
          developement. My focus is on React based applications and I have
          worked with and built both SQL and NoSQL databases.
        </p>
        <a href="https://github.com/cwil423">
          <AiFillGithub size="35px" className="links" />
        </a>
        <a href="https://www.linkedin.com/in/cole-williamson-77b412183">
          <AiFillLinkedin size="35px" className="links" />
        </a>
      </div>
    </div>
  );
}
