import React from 'react';
import './About.scss';
import rocket from '../../images/flying-rocket.gif';

export default function About() {
  return (
    <div className="about-root">
      <div className="rocket">
        <img src={rocket} />
      </div>

      <div className="bio">
        <h1>Hi, my name is Cole Williamson!</h1>
        <h2>I am a self taught web developer.</h2>
        <p>
          I have experience working with all levels of javascript full stack
          developement. My focus is on React based applications and I have
          worked with and built both SQL and NoSQL databases.
        </p>
      </div>
    </div>
  );
}
