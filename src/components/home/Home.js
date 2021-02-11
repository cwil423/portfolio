import React from 'react';
import './Home.scss';
import sun from '../../images/sun.png';

export default function Home() {
  return (
    <div className="home-root">
      <div className="title">
        <h1>
          Hi, my name is <h4>Cole Williamson.</h4>
        </h1>
      </div>
      <img className="image" src={sun} />
      <div className="subtitle">
        <h2>I develop web applications for you.</h2>
      </div>
    </div>
  );
}
